import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../reducer/rootReducer';

const initialState:any={
    token:''
}

export const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        SET_TOKEN(state,action){
            state.userinfo=action.payload
        }
    }
});

export const {SET_TOKEN}=authSlice.actions;
export const selectAuth=(state:RootState)=>state.auth.token;
export default authSlice.reducer;
