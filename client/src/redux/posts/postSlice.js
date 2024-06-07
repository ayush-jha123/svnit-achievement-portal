import { createSlice } from "@reduxjs/toolkit";

const initialState={
    achievements:[],
    oppertunities:[]
};

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        createAchievements:(state,action)=>{
            state.achievements=action.payload;
        },
        createOppertunities:(state,action)=>{
            state.oppertunities=action.payload;
            console.log(state.oppertunities);
        },
        updateAchievements: (state, action) => {
            const index = state.achievements.findIndex(achievement => achievement?._id === action.payload?._id);
            if (index !== -1) {
                state.achievements[index] = action.payload;
            } else {
                state.achievements.push(action.payload);
            }
            console.log(state.achievements);
        },
        updateOpportunities: (state, action) => {
            const index = state.opportunities.findIndex(opportunity => opportunity?._id === action.payload?._id);
            if (index !== -1) {
                state.opportunities[index] = action.payload;
            } else {
                state.opportunities.push(action.payload);
            }
        },
        deleteAchievements:(state,action)=>{
            state.achievements=state.achievements.filter((achievement)=>achievement!=action.payload);
        },
        deleteOppertunities:(state,action)=>{
            state.oppertunities=state.oppertunities.filter((oppertunity)=>oppertunity!=action.payload);
        },
    },
});

export const {createAchievements,createOppertunities,updateAchievements,updateOppertunities,deleteAchievements,deleteOppertunities}=postSlice.actions;

export default postSlice.reducer;