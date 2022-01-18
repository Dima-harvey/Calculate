import { ADD_HISTORY } from '@/constants/actions'

export const addHistory = text => ({
  type: ADD_HISTORY,
  text,
})
