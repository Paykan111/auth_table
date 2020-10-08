<template>
  <div class="container">
    <v-simple-table>
      <tr v-for="(row, column) in dataJson" v-bind:key="row">
        <th>{{ column }}</th>
        <td v-for="item in row" v-bind:key="item">
          {{ item }}
        </td>
      </tr>
    </v-simple-table>
    <div class="linkToAuth">
      <v-btn href="/" flat>
        <span>Log out</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      dataJson:
      {
        'Name': ['Nikita', 'Alex', 'Tom'],
        'Age': ['24', '23', '23'],
        'Country': ['ru', 'en', 'uk'],
      }
    }
  }
}
</script>

<style>

</style>
