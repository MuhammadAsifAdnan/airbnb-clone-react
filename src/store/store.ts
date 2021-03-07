import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import propertiesSlice from '../components/business/propertiesSlice';

export const store = configureStore({
  reducer: {
    properties: propertiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
