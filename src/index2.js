import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/router';
import * as serviceWorker from './serviceWorker';
// import dva from 'dva'
// const app = dva()
// app.router();
// app.model();
// app.start('#root')
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
