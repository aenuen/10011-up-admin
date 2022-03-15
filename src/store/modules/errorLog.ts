import { defineStore } from 'pinia'

interface ErrorLogFace {
  logs: any[]
}

const theErrorLogStore = defineStore('errorLog', {
  state: (): ErrorLogFace => ({
    logs: []
  }),
  actions: {
    insertLog (log:object) {
      this.logs.push(log)
    },
    clearLog () {
      this.logs.splice(0)
    }
  }
})

export default theErrorLogStore
