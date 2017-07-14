import {
    observable,
    computed,
    action,
    autorun
} from 'mobx'

class TodoStore {
    constructor() {
        this.listentodolist()
    }
    @observable showlist = false
    @observable todolist = []
    @computed
    get todocount() {
        return this.todolist.filter( item => item.todo === true).length
    }
    @computed
    get donecount() {
        return this.todolist.filter( item => item.todo !== true).length
    }
    @action newtodo = (text) => {
        this.todolist.push({
            text,
            todo: true,
            time: new Date()
        })
    }
    @action done = (index) => {
        this.todolist[index].todo = false
        console.log(this.todolist.filter( item => item.todo !== true))
    }
    @action retodo = (index) => {
        this.todolist[index].todo = true
    }
    @action delete = (index) => {
        this.todolist.splice(index, 1)
    }
    listentodolist = ()=> {
    autorun(()=> {
        if(this.todolist.length> 0) console.log(this.todolist.filter(item=> item != undefined))
    })
  }
}
export default new TodoStore()