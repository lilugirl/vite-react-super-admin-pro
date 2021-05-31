import {combineReducers} from '@reduxjs/toolkit';
import navReducer from '../slice/navSlice';


const dashboardReducer=combineReducers({
  nav:navReducer
})

export type DashboardState=ReturnType<typeof dashboardReducer>
export default dashboardReducer;