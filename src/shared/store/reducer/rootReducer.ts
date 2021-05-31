import {combineReducers} from '@reduxjs/toolkit';
import appReducer from '../slice/appSlice';
import authReducer from '../slice/authSlice';

const rootReducer=combineReducers({
  app:appReducer,
  auth:authReducer
})

export type RootState=ReturnType<typeof rootReducer>
export default rootReducer;