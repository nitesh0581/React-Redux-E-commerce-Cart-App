const INIT_STATE = {
  carts: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      // if qnty when add item
      if (itemIndex >= 0) {
        return {
          ...state,
          carts: state.carts?.map((item, index) =>
            index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
          ),
        };
      } else {
        // new item added to cart
        const newItem = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, newItem],
        };
      }
    }
    case "RMV_CART": {
      const filteredData = state.carts.filter((e) => e.id !== action.payload);
      return {
        ...state,
        carts: filteredData,
      };
    }

    case "RMV_ONE": {
      const itemIndexRmv = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndexRmv >= 0) {
        const itemQnty = state.carts[itemIndexRmv];
        // if qnty is more than 1 then remove one onclick
        if (itemQnty > 1) {
          return {
            ...state,
            carts: state?.carts?.map((item) =>
              item?.id === itemIndexRmv
                ? { ...item, qnty: item?.qnty - 1 }
                : item
            ),
          };
        }
        // but if qnty is already 1 then on on click dlt that item
        else if (state.carts[itemIndexRmv].qnty === 1) {
          const filteredData = state.carts.filter(
            (el) => el.id !== action.payload
          );

          return {
            ...state,
            carts: filteredData,
          };
        }
      }
      return state;
    }
    // eslint-disable-next-line
    default:
      return state;
  }
};

export default cartReducer;
