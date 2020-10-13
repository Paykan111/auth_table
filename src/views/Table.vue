<template>
  <div class="container">

    <!--    <v-simple-table>-->
    <!--      <tr v-for="(row, column) in this.dataJson" v-bind:key="row">-->
    <!--        <th>{{ column }}</th>-->
    <!--        <td v-for="item in row" v-bind:key="item">-->
    <!--          {{ item }}-->
    <!--        </td>-->
    <!--      </tr>-->
    <!--    </v-simple-table>-->

    <!--    <v-data-table-->
    <!--        :headers="headers"-->
    <!--        :items="desserts"-->
    <!--        :items-per-page="5"-->
    <!--        class="elevation-1"-->
    <!--    >-->
    <!--    </v-data-table>-->

    <h3>{{ dataTable }}</h3>

    <div class="button">
      <v-btn @click="getTokenB()" flat>
        <span>get token</span>
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

  computed: {
    ...mapGetters(['dataTable'])
  },

  methods: {
    ...mapActions(['getDataTable']),
    getTokenB() {
      this.getDataTable()
    }
  },

}
</script>

<style>

</style>
