<template>
  <h1>All Games</h1>
  <div class ="contentWrapper">
    <div class="tableContainer">
      <table class="redTable">
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for:="game in gameList" :class="{selected: selectedGame != null && selectedGame.id === game.id}" v-on:click="selectGame(game)">
          <td>{{ game.id }}</td>
          <td>{{ game.title }}</td>
        </tr>
        </tbody>
      </table>
      <button v-on:click="addRandGame">
        New game
      </button>
    </div>
    <detail34 v-model:game="selectedGame" @deleteGame="deleteGame(selectedGame)" @saveGame="saveGame(selectedGame)"></detail34>
  </div>
</template>

<script>

import { Game } from '@/components/models/game'
import Detail34 from '@/components/games/Detail34'

export default {
  name: 'Overview34',
  data () {
    const pid = 3000
    const selectedGame = null
    const gameList = null
    return {
      gameList: gameList,
      selectedGame: selectedGame,
      pid: pid
    }
  },
  mounted () {
    this.gameList = this.getRandGames()
    this.updateGameSelection()
  },
  watch: {
    '$route' () {
      this.updateGameSelection()
    }
  },
  components: {
    Detail34
  },
  methods:
    {
      addRandGame () {
        const game = Game.createSampleGame(Game.randInt(3040, 3100))
        this.gameList.push(game)
        this.selectedGame = game
      },
      getRandGames () {
        const games = []
        let index = 0
        for (let i = 0; i < 10; i++) {
          games[index++] = Game.createSampleGame(this.$data.pid += Game.randInt(1, 5))
        }
        return games
      },
      selectGame (game) {
        // Select or unselect game
        this.selectedGame = game === this.selectedGame ? null : game
        // If game was selected
        if (this.selectedGame != null) {
          // Push child path to router
          this.$router.push(this.$route.matched[0].path + '/' + game.id)
        } else {
          // Push overview dir to router
          this.$router.push('/games/overview33')
        }
      },
      selectGameWithId (id) {
        const filtered = this.gameList.filter(game => game.id.toString() === id.toString())
        if (filtered.length === 1) {
          return filtered[0]
        }
        return null
      },
      updateGameSelection () {
        // Check whether there is an id
        if (this.$route.params.id != null) {
          // Check whether id exists in gameList
          const game = this.selectGameWithId(this.$route.params.id)
          if (game != null) {
            // Select game if it does
            this.selectedGame = game
            return
          }
        }
        // Clear selection
        this.selectedGame = null
      },
      deleteGame (game) {
        this.gameList.splice(this.gameList.indexOf(game), 1)
        this.selectedGame = null
      }
    }
}
</script>

<style scoped>

.contentWrapper {
  width: 100%;
  display: flex;
}

h1 {
  margin-left: 50px;
}

.tableContainer {
  width: 40%;
  margin-left: 50px;
  margin-right: 5%;
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

.selected {
  background-color: #f5d397 !important;
}
</style>
