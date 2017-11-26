import Reflux from 'reflux'
let myActions = Reflux.createActions({
    asyncAddItem: {
        asyncResult: true
    },
    doOtherThings: {
        aync: true
    }
})

myActions.asyncAddItem.listen(function(name, fn) {
    setTimeout(() => {
        this.completed(name)
        myActions.doOtherThings()
    }, 1000)
})

export default myActions