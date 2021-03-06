import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
// import App from './App';
import LoginComponent from "./component/loginComponent";
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
import './mock/mockIndex'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <LoginComponent />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
