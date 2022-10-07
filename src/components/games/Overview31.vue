<template>
  <h1>All Games</h1>
  <div class="tableContainer">
    <table class="redTable">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Created at</th>
        <th>Status</th>
        <th>Rated</th>
        <th>Time per turn</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for:="game in gameList">
        <td>{{ game.id }}</td>
        <td>{{ game.title }}</td>
        <td>{{ game.createdAt.toLocaleString()}}</td>
        <td>{{ game.status }}</td>
        <td>{{ game.rated ? "Yes" : "No"}}</td>
        <td>{{ game.rated ? game.maxThinkTime : "" }}</td>
      </tr>
      </tbody>
    </table>
    <button v-on:click="addRandGame">
      New game
    </button>
  </div>
</template>

<script>

import { Game } from '../models/game'

export default {
  name: 'Overview31',
  data () {
    const gameList = this.getRandGames()
    return {
      gameList: gameList
    }
  },
  methods:
    {
      addRandGame () {
        this.gameList.push(Game.createSampleGame(Game.randInt(30000, 30100)))
      },
      getRandGames () {
        const games = []
        let index = 0
        for (let i = 0, pid = 3000; i < 10; i++) {
          games[index++] = Game.createSampleGame(pid += Game.randInt(1, 4))
        }
        return games
      }
    }
}
</script>

<style scoped>

  .tableContainer {
    margin-left: 50px;
    margin-right: 50px;
  }

  button {
    float: right;
    width: 150px;
    height: 50px;
    color: white;
    background-color: #610000;
  }

  /* Style under this comment is generated mostly by https://divtable.com/table-styler/ */
  table.redTable {
    border: 2px solid #A40808;
    background-color: #EEE7DB;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table.redTable td, table.redTable th {
    border: 1px solid #AAAAAA;
    padding: 3px 2px;
  }
  table.redTable tbody td {
    font-size: 13px;
  }
  table.redTable tr:nth-child(even) {
    background: #F5C8BF;
  }
  table.redTable thead {
    background: #A40808;
  }
  table.redTable thead th {
    font-size: 19px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    border-left: 2px solid #A40808;
  }
  table.redTable thead th:first-child {
    border-left: none;
  }

  table.redTable tfoot {
    font-size: 13px;
    font-weight: bold;
    color: #FFFFFF;
    background: #A40808;
  }
  table.redTable tfoot td {
    font-size: 13px;
  }
</style>
