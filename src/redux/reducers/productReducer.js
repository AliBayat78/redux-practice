import { ActionTypes } from '../types/action-types'

const initialState = {
  Products: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, Products: action.payload }

    default:
      return state
  }
}
