let initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      return newState;
    }

    case "REMOVE_FROM_CART": {
      let newState = { ...state }
      newState.selectedItems = {
        items: [
          ...state.selectedItems.items.filter((item) => item.title !== action.payload.title)
        ],
        restaurantName : action.payload.restaurantName,
      }
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;