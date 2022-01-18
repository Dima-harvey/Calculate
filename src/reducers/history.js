import { ADD_HISTORY } from "@/constants/actions"

const init = [
  {
    text: '2 + 2',
  },
]
const history = (state = init, action) => {
  switch (action.type) {
    case ADD_HISTORY :
      return [
        ...state, {
          text: action.text,
        },
      ]
    default:
      return state
  }
}

export default history