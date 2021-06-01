import {configureStore,ThunkAction,Action} from '@reduxjs/toolkit';
import rootReducer,{RootState} from './reducer/rootReducer';
export const store=configureStore({
    reducer:rootReducer
});


export type AppDispath=typeof store.dispatch;
export type AppThunk=ThunkAction<void,RootState,unknown,Action<string>>;
export default store;

