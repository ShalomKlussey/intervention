<template>
    <v-container>
        <div>
            <v-breadcrumbs> <v-icon size="small" color="blue-darken-2">mdi-home</v-icon> Parc Total Energie</v-breadcrumbs>
        </div>
        <div>

        </div>
        <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Extincteurs</v-tab>
      <v-tab value="two">Locations</v-tab>
      <v-tab value="three">Informations</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <Extincteur2/>
        </v-window-item>

        <v-window-item value="two">
            <Extincteur1/>
        </v-window-item>

        <v-window-item value="three">
            <Extincteur1/>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
    </v-container>
</template>


<script>
import Extincteur2 from './Extincteur2.vue';

export default {
    data: () => ({
      tab: null,
    }),
    components: { Extincteur2 }
}
</script>