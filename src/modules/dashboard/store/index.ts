import {configureStore,ThunkAction,Action} from '@reduxjs/toolkit';
import dashboardReducer,{DashboardState} from './reducer/dashboardReducer';
export const store=configureStore({
    reducer:dashboardReducer
});

export type AppDispath=typeof store.dispatch;
export type AppThunk=ThunkAction<void,DashboardState,unknown,Action<string>>;
export default store;

