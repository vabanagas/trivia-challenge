import { APIResponse } from '../types'
import axios from 'axios'
import { createModel } from '@rematch/core'

export type AppState = {
  isLoading: boolean
} & APIResponse

export const app = createModel<AppState>({
  state: {
    isLoading: true,
    response_code: 0,
    results: [],
  },
  reducers: {
    fetchQuestions(state: AppState) {
      return { ...state, isLoading: true }
    },
    updateState(state: AppState, payload: Partial<AppState>) {
      return { ...state, ...payload }
    },
    reset() {
      return {
        isLoading: true,
        response_code: 0,
        results: [],
      }
    },
  },
  effects: dispatch => ({
    async fetchQuestions() {
      try {
        const url = process.env.REACT_APP_API_URL
        if (url) {
          const response = await axios.get<APIResponse>(url)
          dispatch.app.updateState({ isLoading: false, ...response.data })
        } else {
          dispatch.app.updateState({
            isLoading: false,
            response_code: 1,
            results: [],
          })
        }
      } catch {
        dispatch.app.updateState({
          isLoading: false,
          response_code: 1,
          results: [],
        })
      }
    },
    async reset() {
      dispatch.step.reset()
      dispatch.results.reset()
      dispatch.app.fetchQuestions()
    },
  }),
})

export type StepState = number

export const step = createModel<StepState>({
  state: 0,
  reducers: {
    prev(state: StepState) {
      if (state > 0) {
        return state - 1
      }
      return state
    },
    next(state: StepState) {
      return state + 1
    },
    reset() {
      return 0
    },
  },
})

export type Result = {
  question: number
  answer: string
}

export type ResultsState = Result[]

export const results = createModel<ResultsState>({
  state: [],
  reducers: {
    addAnswer(state: ResultsState, payload: Result) {
      return [...state, payload]
    },
    reset() {
      return []
    },
  },
  effects: dispatch => ({
    async addAnswer() {
      dispatch.step.next()
    },
  }),
})
