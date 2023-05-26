import {
  combineReducers,
  configureStore,
  // eslint-disable-next-line
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartSlice';
import shopReducer from './shop/shopSlice';

// Persists cart from cartSlice to LocalStorage
const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  persistedData: persistReducer(cartPersistConfig, cartReducer),
  // cart: cartReducer,
  shop: shopReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
