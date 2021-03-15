import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './layout/App';
import ScrollToTop from './layout/ScrollToTop';
import confi from './store/confi';

const store = confi();

ReactDOM.render(
    <Provider store ={store}>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
    </Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
