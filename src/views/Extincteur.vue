<template>
    <v-container>
        <div>
            <v-breadcrumbs> <v-icon size="small" color="blue-darken-2">mdi-home</v-icon> Extincteurs</v-breadcrumbs>
        </div>
        <div>

        </div>
        <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Extincteurs à eau 45 litres</v-tab>
      <v-tab value="two">Extincteurs à CO2</v-tab>
      <v-tab value="three">Extincteurs à eau 6/9 litres</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <Extincteur1/>
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
import Extincteur1 from './Extincteur1.vue';

export default {
    data: () => ({
      tab: null,
    }),
    components: { Extincteur1 }
}
</script>