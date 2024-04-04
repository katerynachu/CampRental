import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { campersReducer } from './campers/camperSlice'
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice'
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        campers: campersReducer,
        filters: filterReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);