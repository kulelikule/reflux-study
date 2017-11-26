import Reflux from 'reflux'
import myActions from '../actions'
export default Reflux.createStore({
    state: [],
    listenables: [myActions],
    onAsyncAddItemCompleted(name) {
        this.state.push(name)
        this.trigger({
            items: this.state
        })
    },
    onDoOtherThings() {
        console.log(`我们正在将${this.state}发送给ET`)
    }
})
