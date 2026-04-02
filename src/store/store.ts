import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import authReducer from './slices/authSlice';
import clinicalReducer from './slices/clinicalSlice';
import raftecReducer from './slices/raftecSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        raftec: raftecReducer,
        clinical: clinicalReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
