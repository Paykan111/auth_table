<template>
  <div class="container">
    <img alt="logo" src="../assets/auth.png">
    <v-text-field
        class="input-data"
        label="Login"
        type="text"
        v-model="login"
    ></v-text-field>
    <v-text-field
        class="input-data"
        v-model="password"
        type="password"
        label="Password">
    </v-text-field>
    <br>
    <div class="linkToTable">
      <v-btn @click="onSubmit()" flat>
        <span>Submit</span>
      </v-btn>
    </div>
    <br>
    <div class="alertText" v-if="isActive">
      <label>{{ msg }}</label>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Auth',
  data() {
    return {
      login: "",
      password: "",
      isActive: false,
      msg: "Не верный логин или пароль!"
    }
  },

  computed: {
    ...mapGetters(['authToken'])
  },

  methods: {
    ...mapActions(['getAuthToken']),
    onSubmit() {
      this.getAuthToken({'login': this.login,'password': this.password});
      if (this.authToken === '') {
        this.isActive = true;
      }
    }
  }
}
</script>

<style>
.alertText {
  color: #ff0000;
}

.input-data {
  max-width: 400px;
  text-align: center !important;
}
</style>