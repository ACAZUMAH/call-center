import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PURGE,
  PAUSE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./root";

const persitConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PURGE, PAUSE, PERSIST],
      },
    });
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// store state types
export type RootState = ReturnType<typeof store.getState>;
// store dispatch types
export type AppDispatch = typeof store.dispatch;
