import { configureStore } from '@reduxjs/toolkit';
import addcardReducer from '../features/addCardSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const cardReducer = persistReducer(persistConfig, addcardReducer);

export const store = configureStore({
  reducer: {
    addcard: cardReducer,
  },
});

export const persistor = persistStore(store);
