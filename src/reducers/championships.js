const championshipsReducer = (state= [], action) => {
  switch (action.type) {
    case 'ADD_CHAMPIONSHIP':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ]
    case 'REMOVE_CHAMPIONSHIP':
      return {
        ...state,
      }

    default:
      return {};
  }
}

export default championshipsReducer;
