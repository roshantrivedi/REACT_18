import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value:[]
    },
    reducers: {
        addItem: (state,action) =>{
            state.value.push(action.payload);
        },
    }

});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;



//console.log(cartSlice.actions);

/*
{addItem: ƒ}
addItem: ƒ actionCreator()
[[Prototype]]: Object
*/

//console.log(cartSlice.reducer);

/*
ƒ (state, action) {
      if (!_reducer) _reducer = buildReducer();
      return _reducer(state, action);
    }
*/