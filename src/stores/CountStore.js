import {
    observable,
    computed,
    action,
    autorun
} from 'mobx'

class CountStore {
    @observable
    count = 0
    list = []
    
    @computed
    get aaa() {
        return this.count * this.count
    }
    @action
    AddCount = () => {
        this.count++
    }

    ReduceCount = () => {
        this.count--
    }
    PushAXXX = (xxx) => {
        this.list.push(xxx)
    }
    DeleteXXX = (index) => {
        this.list.splice(index,1)
    }



}
const obj = new CountStore();
//  autorun(() => console.log(obj.list))

export default new CountStore()