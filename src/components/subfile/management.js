import React, { Component } from 'react';
import Renderrouter from '../../router/renderrouter'
import {Link} from 'react-router-dom'

class management extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isnows :3
        }
    }
    isnowsclick(key){
        this.setState (
            {
                isnows : key
            }
        )
    }
    render() {
        let {
            routes
        } = this.props;
        let {
            path
        } = this.props.match;
        let {
            isnows
        } = this.state;
        window.yy = this;
        return (
            <div className="management">
                <div className="management-list">
                         {
                            routes.map((item,key)=>{
                                return(
                                    <Link to={path+item.path} key={key}
                                        onClick={this.isnowsclick.bind(this,key)}
                                        className={isnows === key ? 'aactive' : ''}
                                    >{item.text}</Link>
                                )
                            })
                        }
                </div>
                <div className="management-con">
                    <Renderrouter routes={routes}/>
                </div>
            </div>
        );
    }
}

export default management;