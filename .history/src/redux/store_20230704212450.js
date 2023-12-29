import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/shazamCore';
import { Middleware } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]:shazamCoreApi.reducer,
    player: playerReducer,
  },
  Middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamCoreApi,middleware),
});
