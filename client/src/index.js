import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './redux/store/store'
import App from './routes/App';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);