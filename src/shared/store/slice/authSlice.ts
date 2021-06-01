import {createSlice} from '@reduxjs/toolkit';
import { AppThunk } from '..';
import {RootState} from '../reducer/rootReducer';
import { setLoading } from './appSlice';



const initialState:any={
    token:window.localStorage.getItem('token')?window.localStorage.getItem('token'):'',
    role:window.localStorage.getItem('role')?window.localStorage.getItem('role'):'',
}

export const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        setToken(state,action){
            state.token=action.payload;
        },
        setRole(state,action){
            state.role=action.payload;
        }
    }
});

export const {setToken}=authSlice.actions;
export const updateToken=(token:string):AppThunk=>dispatch=>{
    console.log('updateToken',token);
    dispatch(authSlice.actions.setToken(token));
    window.localStorage.setItem('token',token);
}
export const doLogin=(values:any,cb:()=>void):AppThunk=>dispatch=>{
  
    dispatch(setLoading(true));
    setTimeout(()=>{
        window.localStorage.setItem('token','liuyi');
        window.localStorage.setItem('role','admin');
        dispatch(authSlice.actions.setToken('liuyi'));
        dispatch(authSlice.actions.setRole('admin'));
        dispatch(setLoading(false));
        cb && cb();
    },2000);
}

export const doLogout=(values:any,cb:()=>void):AppThunk=>dispatch=>{
    dispatch(setLoading(true));
    setTimeout(()=>{
        window.localStorage.setItem('token','');
        window.localStorage.setItem('role','');
        dispatch(authSlice.actions.setToken(''));
        dispatch(authSlice.actions.setRole(''));
        dispatch(setLoading(false));
        cb && cb();
    },200);
}
export const selectToken=(state:RootState)=>state.auth.token;
export const selectRole=(state:RootState)=>state.auth.role;
export default authSlice.reducer;
