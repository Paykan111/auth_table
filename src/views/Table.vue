<template>
  <div class="container">

    <div class="table" v-if="isActive">
      <v-data-table
          :headers="headers"
          :items="itemsFromService"
          :items-per-page="5"
          class="elevation-1"
      ></v-data-table>
    </div>

    <div class="button">
      <v-btn @click="getTable()" flat>
        <span>Table</span>
      </v-btn>
    </div>

    <div class="linkToAuth">
      <v-btn href="/auth/login" flat>
        <span>Log out</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Table',
  data() {
    return {
      isActive: false,

      headers: [
        {text: 'First name', value: ''},
        {text: 'Last name', value: ''},
        {text: 'Age', value: ''},],

      itemsFromService: [],
    }
  },

  computed: {
    ...mapGetters(['dataTable'])
  },

  methods: {
    ...mapActions(['getDataTable']),
    getTable() {
      this.getDataTable()
      // this.itemsFromService =
      this.isActive = true
    }
  },

}
</script>

<style>

</style>
