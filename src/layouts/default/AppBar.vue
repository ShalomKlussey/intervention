<template>
  <div>
    <v-toolbar>
      <v-img height="50" src="@/assets/air-liquide_logo.svg" />
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn class="text-none" stacked>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn class="text-none" stacked>
        <v-badge content="2" color="error">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
  <div class="d-flex justify-center">
    <v-sheet class="mx-5 mt-2">
      <router-link to="/app"><v-btn color="primary">Tableau de bord</v-btn></router-link>
    </v-sheet>

    <v-sheet class="mx-5 mt-2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Parcs
          </v-btn>
        </template>
        <v-list>
          <v-list-item><router-link to="/parcs">Parcs</router-link></v-list-item>
          <v-list-item><router-link to="/parcs">Techniciens</router-link></v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>

    <v-sheet class="mx-5 mt-2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Ressources
          </v-btn>
        </template>
        <v-list>
          <v-list-item><router-link to="/extincteur">Extincteurs</router-link></v-list-item>
          <v-list-item><router-link to="/extincteur">Pièces de rechange</router-link></v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>

    <v-sheet class="mx-5 mt-2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Interventions
          </v-btn>
        </template>
        <v-list>
          <v-list-item><router-link to="/intervention">Liste</router-link></v-list-item>
          <v-list-item><router-link to="/intervention">en attente</router-link></v-list-item>
          <v-list-item><router-link to="/intervention">en cours</router-link></v-list-item>
          <v-list-item><router-link to="/intervention">en retard</router-link></v-list-item>
          <v-list-item><router-link to="/intervention">clôturées</router-link></v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>

  </div>
</template>

<script >
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
//
</script>
