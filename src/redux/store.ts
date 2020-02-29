import * as models from './models'

import { RematchRootState, init } from '@rematch/core'

// Grab the state from a global variable injected into the server-generated HTML
const initialState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = init({
  models,
  redux: {
    initialState,
  },
})

// Tell react-snap how to save Redux state
window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState(),
})

export type TriviaStore = typeof store
export type TriviaDispatch = typeof store.dispatch
export type TriviaRootState = RematchRootState<typeof models>

export default store
