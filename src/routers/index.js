
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'//导入的方式跟之前有点变化
import { Provider } from 'mobx-react'
import store from '../stores'
import DevTools from 'mobx-react-devtools';
import Add from '../pages/Add'
import Other from '../pages/Other/'
import Demo1 from '../pages/Demo1'
import Demo2 from '../pages/Demo2'

const zuhe =() => (
    <div>
        <Add></Add>
        <Other></Other>
    </div>
)
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
                <Route path="/add" component={zuhe}/>
                <Route path="/demo1" component={Demo1}/>
                <Route path="/demo2" component={Demo2}/>
                <Route component={NotFoundPage}/>
                </Switch>
                <DevTools></DevTools>
            </div>
        </Router>
    </Provider>
)
export default RouterList
