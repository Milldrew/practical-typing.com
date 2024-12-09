export const RESTART_RUN = 'restart-run'
export const RUN_FINISHED = 'run-finished'
export const SEND_RUN_DATA = 'send-run-data'
export const SENDING_TIME_TO_PRESS_KEY_DATA = 'sending-time-to-press-key-data'
const GLOBAL_EVENTS_LIST = [
  RESTART_RUN,
  RUN_FINISHED,
  SEND_RUN_DATA,
  SENDING_TIME_TO_PRESS_KEY_DATA
]
export type GlobalEvents = typeof GLOBAL_EVENTS_LIST[number]
export class GlobalEventEmitter {

  constructor() {}
  static listeners = GLOBAL_EVENTS_LIST.reduce((acc: any, event: GlobalEvents) => {
    acc[event] = []
    return acc
  }, {})

  static on(event: GlobalEvents, listener: (...payload: any[]) => void) {
    if (GlobalEventEmitter.listeners[event]) {
      GlobalEventEmitter.listeners[event].push(listener)
    } else {
      console.error(`Event ${event} not found`)
    }
  }

  static emit(event: GlobalEvents, ...args: any[]) {
    if (GlobalEventEmitter.listeners[event]) {
      GlobalEventEmitter.listeners[event].forEach((listener: (...args: any[]) => void) => {
        listener(...args)
      })
    } else {
      console.error(`Event ${event} not found`)
    }
  }


}
