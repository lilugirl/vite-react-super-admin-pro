import {createSlice} from '@reduxjs/toolkit';
import { DashboardState } from '../reducer/dashboardReducer';

const initialState:any={
    title:'',
    subtitle:''
}

export const navSlice=createSlice({
    name:'nav',
    initialState:initialState,
    reducers:{
        setTitle(state,action){
            console.log('setTitle payload',action);
            state.title=action.payload;
        },
        setSubTitle(state,action){
            console.log('setsubTitle payload',action);
            state.subtitle=action.payload;
        }
    }
})

export const {setTitle,setSubTitle} =navSlice.actions;
export const selectTitle=(state:DashboardState)=>state.nav.title;
export const selectSubTitle=(state:DashboardState)=>state.nav.subtitle;
export default navSlice.reducer;