<template>
  <Dialog
    v-bind="$attrs"
    v-on="$listeners"
    width="1000"
    height="700"
    v-if="pokemon"
  >
    <Card width="1000" height="800" color="bodyColor" class="px-6 br-16">
      <template #content>
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="d-flex justify-space-between pa-0">
              <h3 class="vt fs-50">{{ pokemon.name }}</h3>
              <Icon
                color="primary"
                size="30"
                @click="$emit('closeDialog', null)"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" class="pa-0">
              <VuetifyImage
                max-height="250"
                max-width="300"
                :src="
                  pokemon.sprites.back_default ||
                  pokemon.sprites.front_shiny ||
                  '/no-available.png'
                "
              />
            </v-col>
            <v-col cols="12" md="8" class="pa-0">
              <h3 class="poppins fs-28">
                Experiencia base:
                <span class="vt ml-3 fs-30">{{ pokemon.base_experience }}</span>
              </h3>
              <h3 class="poppins fs-28">
                Altura:
                <span class="vt ml-3 fs-30">{{
                  pokemon.height + ' pies'
                }}</span>
              </h3>
              <h3 class="poppins fs-28" v-if="description">
                Descripcion:
                <span class="vt ml-3 fs-30">{{
                  description[5].description
                }}</span>
              </h3>
            </v-col>
          </v-row>
          <v-row class="mt-10">
            <v-col cols="12" class="pa-0">
              <DataTable
                fixed-header
                hide-default-footer
                :headers="headers"
                :items="pokemon.moves"
                height="350"
                mobile-breakpoint="350"
              >
                <template v-slot:[`item.move_learn_method`]="{ item }">
                  <div
                    class="py-1 my-2"
                    v-for="(version, index) in item.version_group_details"
                    :key="index"
                  >
                    {{ version.move_learn_method.name }}
                  </div>
                </template>
                <template v-slot:[`item.version_group_details`]="{ item }">
                  <div
                    class="py-1 my-2"
                    v-for="(version, index) in item.version_group_details"
                    :key="index"
                  >
                    {{ version.version_group.name }}
                  </div>
                </template>
                <template v-slot:[`item.level_learned_at`]="{ item }">
                  <div
                    class="py-1 my-2"
                    v-for="(version, index) in item.version_group_details"
                    :key="index"
                  >
                    {{ version.level_learned_at }}
                  </div>
                </template>
              </DataTable>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </Card>
  </Dialog>
</template>

<script>
import { fetchDataFunction } from '@/services/fetchDataFunction'
import { mapActions } from 'vuex'

export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      description: null,
      headers: [
        {
          text: 'Move',
          value: 'move.name',
          class: 'primary',
          sortable: false,
        },
        {
          text: 'Learning method',
          value: 'move_learn_method',
          class: 'primary',
          sortable: false,
        },

        {
          text: 'Version group',
          value: 'version_group_details',
          class: 'primary',
          sortable: false,
        },
        {
          text: 'Level learned',
          value: 'level_learned_at',
          class: 'primary',
          sortable: false,
        },
      ],
    }
  },
  methods: {
    ...mapActions(['handleAlert']),
    async getPokemonDescription() {
      await fetchDataFunction(
        async () => {
          const res = await this.$getPokemonDescription(this.pokemon.id)
          return res
        },
        async (data) => {
          this.description = data.data.descriptions
        },
        (error) => {
          this.handleAlert({
            showAlert: true,
            type: 'error',
            text: 'Error al intentar cargar descripciones, por favor, refresque la pagina',
          })
          return error
        },
        this.$store
      )
    },
  },
  async created() {
    await this.getPokemonDescription()
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px;
  height: 80px;
}

::-webkit-scrollbar-track {
  background: #e7e7e7;
  border-radius: 5px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: #3e4251;
  border-radius: 5px;
}
::v-deep
  .v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(
    .v-data-table__empty-wrapper
  ) {
  background: none !important;
}
</style>
