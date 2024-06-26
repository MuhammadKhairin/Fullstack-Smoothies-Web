import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const index = state.findIndex((obj) => obj.id == action.payload.id);
      if (index == -1) {
        return [...state, { ...action.payload, quantitiy: 1 }];
      } else {
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, quantitiy: obj.quantitiy + 1 };
          } else {
            return obj;
          }
        });
      }
    }
    case "decrese": {
      const index = state.findIndex((obj) => obj.id == action.payload.id);
      if (index !== -1) {
        if (state[index].quantitiy === 1) {
          return state.filter((obj) => obj.id !== action.payload.id);
        } else {
          return state.map((obj) => {
            if (obj.id === action.payload.id) {
              return { ...obj, quantitiy: obj.quantitiy - 1 };
            } else {
              return obj;
            }
          });
        }
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = [];
const CartProvider = ({ children }) => {
  const [carts, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={carts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
