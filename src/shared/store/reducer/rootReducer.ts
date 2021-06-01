import {combineReducers} from '@reduxjs/toolkit';
import appReducer from '../slice/appSlice';
import authReducer from '../slice/authSlice';
import navReducer from '../../../modules/dashboard/store/slice/navSlice';

const rootReducer=combineReducers({
  app:appReducer,
  auth:authReducer,
  nav:navReducer
})

export type RootState=ReturnType<typeof rootReducer>
export default rootReducer;