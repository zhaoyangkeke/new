import React, { Component } from 'react'
import {hash} from '../util'
import {Link} from 'react-router-dom'
class HeaderNav extends Component {
    constructor (props) {
        super(props)
        this.state ={
            isnow:0
        }
    }
    btnisnow(index){
        this.setState(
           { isnow:index}
        )
    }
    render () {
        let {navList} = this.props;
        let {isnow} = this.state;
        return (
            <div className="wrap">
               <header>
                    <a  href="###">
                        <img src="images/header.jpg" alt="" />
                    </a>
                        <ul>
                            {
                            navList.map((item,key)=>{
                                    return (
                                        <Link key={hash()} to={item.path}
                                            className={isnow === key ? 'active' : ''}
                                            onClick={this.btnisnow.bind(this,key)}
                                            >
                                            {item.text}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                        <div className="user">asa</div>
                        <div className="info">asas</div>
               </header>
            </div>
        )
       
    }
   
}
HeaderNav.defaultProps = {
    navList:[
        {
            text:'首页',
            path:'/',
            coponent:'Home'
        }, {
            text:'员工管理',
            path:'/management'
        }, {
            text:'员工考勤',
            path:'/check'
        }, {
            text:'工作计划',
            path:'/plan'
        }, {
            text:'客户管理',
            path:'/customer'
        }, {
            text:'亚太学院',
            path:'/college'
        }, {
            text:'级别考核',
            path:'/rank'
        }, {
            text:'管理助手',
            path:'/assistant'
        }, {
            text:'积分管理',
            path:'/integration'
        }
    ]
}
export default HeaderNav