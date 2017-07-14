
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'//导入的方式跟之前有点变化
import { Provider } from 'mobx-react'
import store from '../stores'
import DevTools from 'mobx-react-devtools';
// import { initStore } from '../../serve.js'
import { Add, Other, Demo1, Demo2, Demo3, Demo4, Demo5, TodoMvc } from '../pages'

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
                <Route path="/demo3" component={Demo3}/>
                <Route path="/demo4" component={Demo4}/>
                <Route path="/demo5" component={Demo5}/>
                <Route path="/todomvc" component={TodoMvc}/>
                <Route component={NotFoundPage}/>
                </Switch>
                <DevTools></DevTools>
            </div>
        </Router>
    </Provider>
)
export default RouterList
