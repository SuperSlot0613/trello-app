import { configureStore } from '@reduxjs/toolkit';
import addcardReducer from '../features/addCardSlice'

export const store = configureStore({
  reducer: {
    addcard: addcardReducer,
  },
});
