export const SHOW_CELEBRATORY_ANIMATION = 'show-celebratory-animation'
export const REMOVE_KEY_LISTENER = 'remove-key-listener'
export const ADD_KEY_LISTENER = 'add-key-listener'
export const RESTART_RUN = 'restart-run'
export const RUN_FINISHED = 'run-finished'
export const SEND_RUN_DATA = 'send-run-data'
export const SENDING_TIME_TO_PRESS_KEY_DATA = 'sending-time-to-press-key-data'
export const SHOW_SNACKBAR = 'show-snackbar'
export const SEND_CURRENT_KEY_TO_FINGERS_COMPONENT = 'send-current-key-to-fingers-component'
/**
  * Event is fired when the competitor finishes their competitive run.
  */
export const SEND_COMPETE_MODE_RUN_DATA = 'send-compete-mode-run-data'
const GLOBAL_EVENTS_LIST = [
  RESTART_RUN,
  RUN_FINISHED,
  SEND_RUN_DATA,
  SENDING_TIME_TO_PRESS_KEY_DATA,
  SEND_COMPETE_MODE_RUN_DATA,
  ADD_KEY_LISTENER,
  SHOW_SNACKBAR,
  REMOVE_KEY_LISTENER,
  SHOW_CELEBRATORY_ANIMATION,
  SEND_CURRENT_KEY_TO_FINGERS_COMPONENT

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
