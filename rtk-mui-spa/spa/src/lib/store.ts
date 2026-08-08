import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import {todoSlice} from "@/lib/features/todo/todoSlice";
import {todoApiSlice} from "@/lib/features/todo/todoApiSlice";
import {authSlice} from "@/lib/features/auth/authSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// Import the session storage engine specifically
import storageSession from 'redux-persist/lib/storage/session';
const persistConfig = {
  key: 'root',
  storage:storageSession,
  whitelist: [ authSlice.name], // Only persist specific slice states
};

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
    todoSlice,
    todoApiSlice,
    authSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer) as unknown as typeof rootReducer;
// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    //reducer: rootReducer,
    reducer:persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore internal redux-persist action types to prevent console warnings
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
          },
        }).concat(todoApiSlice.middleware),
    /*middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(todoApiSlice.middleware);
    },*/
  });
};
export const store = makeStore();
export const persistor = persistStore(store);
// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
