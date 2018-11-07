import dva from 'dva';
import React from 'react'
import Router from './router/router'
import home from './model/home'
const app = dva();
app.router(()=><Router></Router>);
app.model(home);
app.start('#root');