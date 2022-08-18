import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './store/mainReducer';

const store = configureStore({
    reducer: { mainReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
