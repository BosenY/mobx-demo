import {
    observable,
    computed,
    action,
    autorun
} from 'mobx'

class CountStore {
    constructor() {
    this.test()
    }
    @observable count = 0
    @observable list = []

    @computed
    get aaa() {
        return this.count * this.count
    }

    @action AddCount = () => {
        this.count++
    }
    @action ReduceCount = () => {
        this.count--
    }
    @action PushAXXX = (xxx) => {
        this.list.push(xxx)
    }
    @action DeleteXXX = (index) => {
        this.list.splice(index, 1)
    }

  test = ()=> {
    autorun(()=> {
        if(this.list.length> 0) console.log(this.list.length)
    })
  }

}

export default new CountStore()