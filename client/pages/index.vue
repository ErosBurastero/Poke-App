<template>
  <div class="mt-10" v-if="pokemons">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="4" v-for="(pokemon, index) in pokemons" :key="index">
          <Card color="secondary">
            <template #content>
              <VuetifyImage
                height="200"
                width="220"
                :src="pokemon.sprites.front_default"
                alt="Pokemon Image"
              />
              <h2>{{ pokemon.name }}</h2>
              <p>Height: {{ pokemon.height }}</p>
              <p>Weight: {{ pokemon.weight }}</p>
            </template>
          </Card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <Pagination
            color="primary"
            circle
            paginationClass="pb-9"
            v-model="currentPage"
            :length="pagination"
            :total-visible="10"
            @next="increaseOffset"
            @previous="decreaseOffset"
            @input="getInput"
          />
        </v-col>
      </v-row>
    </v-container>
    <Snackbar v-model="snackbar.model" :color="snackbar.color">{{
      snackbar.text
    }}</Snackbar>
  </div>
</template>

<script>
import { fetchDataFunction } from '@/services/fetchDataFunction'

export default {
  name: 'IndexPage',
  data() {
    return {
      pokemons: [],
      snackbar: {
        model: false,
        text: '',
        color: '',
      },
      offset: 16,
      limit: 16,
      pagination: null,
      currentPage: 1,
      nextPage: null,
      previousPage: null,
    }
  },
  methods: {
    async getPokemons() {
      await fetchDataFunction(
        async () => {
          const res = await this.$getPokemons(this.limit, this.offset)
          return res
        },
        async (data) => {
          console.log(data)
          this.previousPage = data.data.previous
          this.nextPage = data.data.next
          if (data.data.count > 16) {
            this.pagination = Math.ceil(data.data.count / 16)
          } else {
            this.pagination = 1
          }
          const pokemonDetails = await Promise.all(
            data.data.results.map(async (pokemon) => {
              const detailedRes = await this.$getPokemonByName(pokemon.name)
              return detailedRes.data
            })
          )
          this.pokemons = pokemonDetails
        },
        (error) => {
          this.snackbar.snackbar = true
          this.snackbar.color = 'error'
          this.snackbar.text =
            'Error al intentar cargar pokemones, por favor, refresque la pagina'
          return error
        }
      )
    },
    increaseOffset() {
      this.offset = this.offset + 16
    },
    decreaseOffset() {
      this.offset = this.offset - 16
    },
    getInput(input) {
      this.offset = this.limit * input
    },
  },
  async mounted() {
    await this.getPokemons()
  },
  watch: {
    offset: {
      immediate: true,
      handler: 'getPokemons',
    },
  },
}
</script>
