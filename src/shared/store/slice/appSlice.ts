import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../reducer/rootReducer';


const initialState:any={
    loading:false
}

export const appSlice=createSlice({
    name:'app',
    initialState:initialState,
    reducers:{
        setLoading(state,action){
            state.loading=action.payload;
        }
    }
})

export const {setLoading} =appSlice.actions;
export const selectLoading=(state:RootState)=>state.app.loading;
export default appSlice.reducer;