import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({

    name: "login",
    initialState: {
        value: {
            userName:"",
            password:""
        }
    },
    reducers: {
        loginfn : (state,action) => {
            state.value = action.payload;
        },
        logoutfn: (state) => {
            state.value = {};
        }
    }
});

export const { loginfn, logoutfn } = loginSlice.actions;

export default loginSlice.reducer;