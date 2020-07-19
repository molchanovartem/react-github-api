import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';
import Layout from "./layouts/Layout";
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout>
                <App/>
            </Layout>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
