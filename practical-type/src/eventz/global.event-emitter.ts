const RESTART_RUN = 'restart-run'
const GLOBAL_EVENTS_LIST = [
  RESTART_RUN
]
export type GlobalEvents = typeof GLOBAL_EVENTS_LIST[number]
export class GlobalEventEmitter {

  constructor() {}
  listeners = GLOBAL_EVENTS_LIST.reduce((acc: any, event: GlobalEvents) => {
    acc[event] = []
    return acc
  }, {})

  on(event: GlobalEvents, listener: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(listener)
  }

  emit(event: GlobalEvents) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener: () => void) => {
        listener()
      })
    } else {
      console.error(`Event ${event} not found`)
    }
  }


}
