<template>
  <div id="app-games-detail">
    <div class="tableContainer" v-if="game != null">
      <table class="redTable">
        <thead>
        <tr>
          <th>Game details (id: {{game.id}})</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Title:</td>
          <td>
            <input v-model="game.title">
          </td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            <select v-model="game.status">
              <option v-for:="(str, key) in statusOptions" :value="key"> {{str}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Rated:</td>
          <td>
            <input type="checkbox" v-model="game.rated">
          </td>
        </tr>
        <tr>
          <td>Created by:</td>
          <td>WIP</td>
        </tr>
        <tr>
          <td>Created at:</td>
          <td>
            <input type="datetime-local" v-model="dateUpdater">
          </td>
        </tr>
        </tbody>

      </table>
      <button @click="$emit('deleteGame')">
        Delete
      </button>
    </div>
    <div v-else>
      <p>Please select a game!</p>
    </div>
  </div>
</template>

<script>
import { Game, Status } from '@/components/models/game'

export default {
  name: 'Detail32',
  data () {
    return {
      statusOptions: Status
    }
  },
  props: {
    game: Game
  },
  emits: ['deleteGame'],
  computed: {
    dateUpdater: {
      get () {
        return this.game.createdAt.toISOString().substring(0, 19)
      },
      set (value) {
        this.game.createdAt = new Date(value + 'Z')
      }
    }
  },
  methods: {
  }
}

</script>

<style scoped>
  #app-games-detail {
    vertical-align: top;
    width: 35%;
    display: inline-block;
    color: black;
  }
</style>
