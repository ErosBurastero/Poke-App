<template>
  <div class="mt-10 wrapper" v-if="pokemons">
    <v-container fluid class="pa-0">
      <v-row justify="space-between">
        <v-col
          cols="12"
          sm="6"
          lg="4"
          v-for="(pokemon, index) in pokemons"
          :key="index"
        >
          <Card
            color="primary"
            cardClass="br-16 h-100 pointer"
            @click="openOrCloseDialog(pokemon)"
          >
            <template #content>
              <v-row>
                <v-col cols="12" class="d-flex justify-center">
                  <figure>
                    <VuetifyImage
                      height="200"
                      width="220"
                      :src="pokemon.sprites.front_default"
                      alt="Pokemon Image"
                    />
                  </figure>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="px-4 pb-4">
                <v-col cols="12">
                  <h2 class="vt fs-50 text-center">{{ pokemon.name }}</h2>
                  <div class="d-flex align-center mt-2">
                    <h3 class="fs-28 poppins">
                      {{ pokemon.types.length === 1 ? 'Type: ' : 'Types: ' }}
                    </h3>
                    <span
                      v-for="type in pokemon.types"
                      :key="type.slot"
                      class="d-flex align-center mt-n1 ml-2 vt fs-30"
                    >
                      {{
                        pokemon.types.length === type.slot
                          ? type.type.name + '.'
                          : type.type.name + ', '
                      }}
                    </span>
                  </div>
                  <h3 class="poppins fs-28">
                    Weight: <span class="vt fs-30">{{ pokemon.weight }}</span>
                  </h3>
                </v-col>
              </v-row>
            </template>
          </Card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <Pagination
            color="primary"
            navigation-color="primary"
            circle
            paginationClass="pb-9"
            v-model="currentPage"
            :length="pagination"
            :total-visible="$vuetify.breakpoint.smAndDown ? 5 : 10"
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
    <PokemonDialog
      @click:outside="openOrCloseDialog"
      @closeDialog="openOrCloseDialog"
      v-if="dialog && pokemon"
      v-model="dialog"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { fetchDataFunction } from '@/services/fetchDataFunction'

export default {
  name: 'IndexPage',
  data() {
    return {
      pokemons: [],
      pokemon: null,
      snackbar: {
        model: false,
        text: '',
        color: '',
      },
      offset: 15,
      limit: 15,
      pagination: null,
      currentPage: 1,
      nextPage: null,
      previousPage: null,
      dialog: false,
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
          this.previousPage = data.data.previous
          this.nextPage = data.data.next
          if (data.data.count > 15) {
            this.pagination = Math.ceil(data.data.count / 15) - 1
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
        },
        this.$store
      )
    },
    increaseOffset() {
      this.offset = this.offset + 15
    },
    decreaseOffset() {
      this.offset = this.offset - 15
    },
    getInput(input) {
      this.offset = this.limit * input
    },
    openOrCloseDialog(pokemon) {
      this.dialog = !this.dialog
      this.pokemon = pokemon
    },
  },
  async mounted() {
    await this.getPokemons()
  },
  watch: {
    offset: {
      immediate: false,
      handler: 'getPokemons',
    },
  },
}
</script>
<style scoped>
::v-deep .v-pagination__navigation {
  width: 50px;
  height: 50px;
  border: solid 1px white;
}
::v-deep .v-pagination__item {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: solid 1px white;
}
::v-deep .v-pagination__item--active {
  border: solid 1px white !important;
}
</style>
