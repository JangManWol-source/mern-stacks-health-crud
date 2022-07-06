import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import toggleReducer from '../features/toggle/toggle'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer
  },
});
