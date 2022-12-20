import { ActionTypes } from '../types/action-types'

const initialState = {
  Products: [
    {
      id: 1,
      title: 'Zed',
      category: 'Programmer',
    },
  ],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state

    default:
      return state
  }
}
