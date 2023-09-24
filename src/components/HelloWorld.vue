<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">

      <v-img height="100" src="@/assets/air-liquide_logo.svg" />

      <h1 class="font-weight-bold text text-primary">in Congo</h1>
      <div class="py-7" />
      <v-row class="d-flex align-center justify-center">

        <v-sheet width="500" class="bg-indigo-darken-1 pa-12" rounded>
          <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable
                label="Email"></v-text-field>

              <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable label="Password"
                placeholder="Enter your password"></v-text-field>
              <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                variant="elevated">
                Sign In
              </v-btn>
            </v-form>
          </v-card>
        </v-sheet>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
      this.$router.push("/app")
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
