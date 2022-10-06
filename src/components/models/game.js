class Game {
  constructor (id, title, status, maxThinkTime, rated, createdAt, createdBy) {
    this.id = id
    this.title = title
    this.status = status
    this.maxThinkTime = maxThinkTime
    this.rated = rated
    this.createdAt = createdAt
    this.createdBy = createdBy
  }

  static randomDate (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

  static createSampleGame (pid = 0) {
    return new Game(pid, 'Test Game Title', Math.random(Status), Math.random(30, 120), Math.random(2) === 0,
      Game.randomDate(new Date(2022, 6, 0), new Date()), 'Dev')
  }
}

const Status = {
  NEW: 'New',
  BROADCAST: 'Broadcast',
  RUNNING: 'Running',
  FINISHED: 'Finished'
}

export {
  Game
}
