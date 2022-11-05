import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import './i18next';
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <Suspense fallback="...">
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
)

