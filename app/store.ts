import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../services/cryptoApi'
import { newsApi } from '../services/cryptoNewsApi'

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [newsApi.reducerPath]:newsApi.reducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch