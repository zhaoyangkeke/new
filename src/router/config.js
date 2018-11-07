import Login from '../components/login'
import Layout from '../components/layout'

import Home from '../components/subfile/home'//首页
import Management from '../components/subfile/management'// management员工管理
import Check from '../components/subfile/check' //check员工考勤
import Plan from '../components/subfile/plan' //plan工作计划
import Customer from '../components/subfile/customer' //customer客户管理
import College from '../components/subfile/college' // college亚太学院
import Rank from '../components/subfile/rank' //rank级别考核
import Assistant from '../components/subfile/assistant' //assistant管理助手
import Integration from '../components/subfile/integration' //integration积分管理

import Record from '../components/managements/record' //record 档案管理
import Allocation from '../components/managements/allocation' //allocation 分配管理
import Course from '../components/managements/course' //course 课程管理
import Take from '../components/managements/take'  //take 代课费管理
import Birthday from '../components/managements/birthday' //birthday 生日提醒
import Remuneration from '../components/managements/remuneration' //remuneration 薪酬管理
import Dimission from '../components/managements/dimission' //dimission 离职管理

export default [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/layout',
        component:Layout,
        children:[
            {
                path:'/home',
                component:Home,
                text:'首页'
            },{
                path:'/management',
                component:Management,
                text:'员工管理',
                children:[
                    {
                        path:'/record',
                        component:Record,
                        text:'档案管理'
                    },{
                        path:'/allocation',
                        component:Allocation,
                        text:'分配管理'
                    },{
                        path:'/course',
                        component:Course,
                        text:'课程管理'
                    },{
                        path:'/take',
                        component:Take,
                        text:'代课费管理'
                    },{
                        path:'/birthday',
                        component:Birthday,
                        text:'生日提醒'
                    },{
                        path:'/remuneration',
                        component:Remuneration,
                        text:'薪酬管理'
                    },{
                        path:'/dimission',
                        component:Dimission,
                        text:'离职管理'
                    }
                ]
            },{
                path:'/check',
                component:Check,
                text:'员工考勤'
            },{
                path:'/plan',
                component:Plan,
                text:'工作计划'
            },{
                path:'/customer',
                component:Customer,
                text:'客户管理'
            },{
                path:'/college',
                component:College,
                text:'亚太学院'
            },{
                path:'/rank',
                component:Rank,
                text:'级别考核'
            },{
                path:'/assistant',
                component:Assistant,
                text:'管理助手'
            },{
                path:'/integration',
                component:Integration,
                text:'积分管理'
            }
        ]
    }
]

