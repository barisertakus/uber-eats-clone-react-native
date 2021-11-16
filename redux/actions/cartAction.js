export const selectItem = (item, restaurantName, value) => {
  if(value){
    return {
      type: "ADD_TO_CART",
      payload: {...item, restaurantName},
    };
  } else{
    return {
      type: "REMOVE_FROM_CART",
      payload: {...item, restaurantName}
    }
  }
}
 