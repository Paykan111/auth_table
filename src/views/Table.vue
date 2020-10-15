<template>

  <div class="container">

    <div class="table" v-if="isActive">
      <v-data-table
          :headers="headers"
          :items="items"
      ></v-data-table>
    </div>

    <div class="button">
      <v-btn @click="getTable()" flat>
        <span>Table</span>
      </v-btn>
    </div>

    <div class="linkToAuth">
      <v-btn href="/auth/login" flat>
        <span>Back</span>
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

       headers:
            [
          {text: 'Game #', value: 'name'},
          {text: "Player 1", value: "PlayerOne"},
          {text: "Player 2", value: "PlayerTwo"},
        ],

        items:
       // [],

        [
          {name: 'name 1', PlayerOne: 'john', PlayerTwo: 'Mike'},
          {name: 'name 2', PlayerOne: 'James', PlayerTwo: 'Bill'},
          {name: 'name 3', PlayerOne: 'Jack', PlayerTwo: 'Ben'},
         ],

    }
  },

  computed: {
    ...mapGetters(['dataTable'])
  },

  methods: {
    ...mapActions(['getDataTable']),
    getTable() {
      // this.getDataTable()          //достаём данные с бэка
      // this.items = this.dataTable;
      this.isActive = true
    }
  },

}
</script>

<style>

</style>
