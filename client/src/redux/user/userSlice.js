import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=false;
        },
        signOut:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=false;
        },
    },
});

export const {signInStart,signInSuccess,signInFailure,signOut}=userSlice.actions;

export default userSlice.reducer;