import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Renderrouter from '../router/renderrouter'
import '../scss/style.css'
class layout extends Component {
    render() {
        let {
            path
        } = this.props.match;
        let {
            routes
        } = this.props;
        return (
            <div className="wrap">
                <nav>
                    <div className="img">
                        <img src="/images/header.jpg" alt="" />
                    </div>
                    <div className="list">
                        {
                            routes.map((item,key)=>{
                                return(
                                    <NavLink to={path+item.path} key={key}
                                    >{item.text}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="inform">

                    </div>
                </nav>
                <section>
                    <Renderrouter routes={routes}/>
                </section>
            </div>
        );
    }
}

export default layout;