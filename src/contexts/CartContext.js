import React, { createContext, useReducer, useContext } from 'react';

export const CartContext = createContext()

const initialState = []

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const REMOVE_ALL = 'REMOVE_ALL'

export const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: +new Date(),
                    content: action.payload,
                }
            ];
        case REMOVE:
            return state.filter(t => t.id !== action.payload.id)
        case REMOVE_ALL:
            return initialState
        default:
            return state
    }
};

export const CartProvider = props => {
    const [state, CartDispatch] = useReducer(CartReducer, initialState);
    
    const addToCart = (data)  => {
        CartDispatch({
            type: ADD,
            payload: data
        })
    }
    const removeFromCart = (data)  => {
        CartDispatch({
            type: ADD,
            payload: data
        })
    }

    const clearCart = () => {
        CartDispatch({
            type: REMOVE_ALL,
        })
    }

    const cartData = { state, CartDispatch, addToCart, removeFromCart, clearCart };

    return (
        <CartContext.Provider value={cartData}>
            {props.children}
            {/* {createPortal(<Toast toast={toast} />, document.body)} */}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};