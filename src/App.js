//好了接下来我们直接路由
//打开demo文件下的src文件夹，直接修改 App.js 

import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'//导入的方式跟之前有点变化
import { Provider } from 'mobx-react'
import store from './stores'
import DevTools from 'mobx-react-devtools';
import Add from './pages/Add'
import Other from './pages/Other/'
 

const One = () => (
    <div>
        <h2 >首页</h2>
    </div>
)

const Two = () => (
    <div>
        <h2>我是第二页</h2>
    </div>
)
const NotFoundPage = () => (
    <div>
    <h1>404</h1>
    <button onClick={()=> {console.log(11)}}>back</button>
    </div>
)
const RouterList = () => (
    <Provider { ...store }>
        <Router>
            <div>
                <Switch>
                <Route exact path="/" component={One}/>
                <Route path="/two" component={Other}/>
                <Route path="/add" component={Add}/>
                <Route component={NotFoundPage}/>    
                </Switch>
                <Other></Other>
                <DevTools></DevTools>
            </div>
        </Router>
    </Provider>
)
export default RouterList