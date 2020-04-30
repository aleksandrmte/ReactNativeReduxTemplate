import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import { readyStatePromise } from './middleware/readyStatePromise';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
    auth: authReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, applyMiddleware(thunk, readyStatePromise));
const persistor = persistStore(store);
export { store, persistor };

