import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

export const rootReducer = combineReducers({

});

//Persist config: chỉ persist nhung store trong whitelist
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: [],
};

//Create persistedReducer (wrapped version of rootReducer)
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Store setup
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
        // thêm các middleware tùy chỉnh ở đây
    ),
});

//Persistor instance
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;