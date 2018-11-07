import React, { Component } from 'react'
import {connect} from 'dva'

class Home extends Component {
    render () {
        let {title,setNewTitle} = this.props;
        return (
            <div className="home">
                <div className="home-left">
                <h1>{title}</h1>
                <button onClick={()=>{setNewTitle('hello word')}}>点击切换标题</button>
                    <div className="home-img">
                        <img src="/images/header_07.jpg" alt=""/>
                    </div>
                    <div className="home-user">
                        <p>Hi,Jim阳光</p>
                        <div className="p">
                            <p>岗位：分部主管</p>
                            <p>总积分：2000</p>
                            <p>积分排名：100/2500</p>
                        </div>
                    </div>
                </div>
                <div className = "home-right">

                </div>
            </div>
        )
    }
}
let mapState = (state)=>{
    let {home} = state;
    return {...home}
}
let mapDispatch = (dispatch)=>{
    return {
        setNewTitle(newTitle){
            dispatch({type:'home/setTitle',title:newTitle})
        }
    }
}
export default connect(mapState,mapDispatch)(Home)