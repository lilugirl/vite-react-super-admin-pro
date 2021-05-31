import {createSlice} from '@reduxjs/toolkit';
import { AppThunk } from '..';
import {RootState} from '../reducer/rootReducer';
import { setLoading } from './appSlice';

const initialState:any={
    token:window.localStorage.getItem('token')?window.localStorage.getItem('token'):''
}

export const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        setToken(state,action){
            state.token=action.payload
        }
    }
});

export const {setToken}=authSlice.actions;
export const doLogin=(values:any,cb:()=>void):AppThunk=>dispatch=>{
  
    dispatch(setLoading(true));
    setTimeout(()=>{
        window.localStorage.setItem('token','liuyi');
        dispatch(authSlice.actions.setToken('liuyi'))
        dispatch(setLoading(false));
        cb && cb();
    },2000);
}
export const selectAuth=(state:RootState)=>state.auth.token;
export default authSlice.reducer;
