import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Renderrouter from './renderrouter'
import config from './config'
class Router extends Component {
    render () {
        return (
            <BrowserRouter>
                   <Renderrouter routes={config}/>
            </BrowserRouter>
        )
    }
}

export default Router