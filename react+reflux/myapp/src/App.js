import React, { Component } from 'react'
import actions from './actions'
import store from './store'

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
        this.stateChange = this.stateChange.bind(this)
    }
    componentDidMount() {
        // 订阅事件
        store.listen(this.stateChange)
    }
    stateChange(state) {
        this.setState(state)
    }
    add() {
        actions.asyncAddItem(`new Item: ${Math.random()}`)
    }
    render() {
        let items = this.state.items.map(item => <div key={item}>{item}</div>)
        return (
            <div>
                {items}
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default App;
