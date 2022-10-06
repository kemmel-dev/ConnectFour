<template>
  <h1> overview {{ this.getRandGames() }}</h1>
</template>

<script>

import { Game } from '../models/game'

export default {
  name: 'Overview31',
  methods:
    {
      getRandGames () {
        const games = []
        let index = 0
        let pid = 30000
        while (index < 10) {
          games[index++] = Game.createSampleGame(pid += Math.random(1, 4))
        }
        return games
      }
    }
}
</script>

<style scoped>

</style>
