const INIT_STATE = {
    carts: [],
  };
  
  const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ADD_CART": {
        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
  
        if (itemIndex >= 0) {
          // Item already exists, so update quantity immutably
          return {
            ...state,
            carts: state.carts.map((item, index) =>
              index === itemIndex
                ? { ...item, qnty: item.qnty + 1 } // Increase quantity immutably
                : item
            ),
          };
        } else {
          // add New item to the cart
          const newItem = { ...action.payload, qnty: 1 };
          return {
            ...state,
            carts: [...state.carts, newItem],
          };
        }
      }
  
      case "RMV_CART": {
        // Remove item from the cart
        const filteredCarts = state.carts.filter((item) => item.id !== action.payload);
        return {
          ...state,
          carts: filteredCarts,
        };
      }
  
      case "RMV_ONE": {
        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
  
        if (itemIndex >= 0) {
          const item = state.carts[itemIndex];
  
          if (item.qnty > 1) {
            // Decrease quantity immutably
            return {
              ...state,
              carts: state.carts.map((cartItem, index) =>
                index === itemIndex
                  ? { ...cartItem, qnty: cartItem.qnty - 1 } // Decrease quantity immutably
                  : cartItem
              ),
            };
          } else if (item.qnty === 1) {
            // Remove item if quantity is 1
            const filteredCarts = state.carts.filter((cartItem) => cartItem.id !== action.payload.id);
            return {
              ...state,
              carts: filteredCarts,
            };
          }
        }
        return state;
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  