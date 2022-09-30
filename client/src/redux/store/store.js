import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);