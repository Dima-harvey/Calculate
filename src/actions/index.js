import { ADD_HISTORY, CLEAR_HISTORY } from "@/constants"

export const addHistory = text => ({
  type: ADD_HISTORY,
  payload: text,
})

export const ClearHistory = () => ({
  type: CLEAR_HISTORY,
})