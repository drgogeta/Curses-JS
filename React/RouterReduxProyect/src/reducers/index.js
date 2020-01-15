const reducer = (state, action ) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
      case 'DELETE_FAVORITE':
        return {
          ...state,
          myList: state.myList.filter(item => action.payload !== item.id)
        }
      default:
      return state
  }
}

export default reducer
