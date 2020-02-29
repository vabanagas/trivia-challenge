declare global {
  interface Window {
    __PRELOADED_STATE__: any
    snapSaveState: any
  }
}

window.__PRELOADED_STATE__ = window.__PRELOADED_STATE__ || {}

export type SuccessCode = 0

export type NoResultsCode = 1

export type InvalidParamCode = 2

export type TokenNotFoundCode = 3

export type TokenEmptyCode = 4

export type ResponseCode =
  | SuccessCode
  | NoResultsCode
  | InvalidParamCode
  | TokenNotFoundCode
  | TokenEmptyCode

export type Type = 'multiple' | 'boolean'

export type Difficulty = 'easy' | 'medium' | 'hard'

export type Result = {
  category: string
  type: Type
  difficulty: Difficulty
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export type APIResponse = {
  response_code: ResponseCode
  results: Result[]
}
