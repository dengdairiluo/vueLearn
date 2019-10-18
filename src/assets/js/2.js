var vm = new Vue({

})

var data = { a: 1 }

var vm = new Vue({
    data: data
})

vm.a == data.a

vm.a = 2
data.a

data.a = 3
vm.a

var data = {
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompleteTodos: false,
        todos: [],
        error: null
    }
}

var obj = {
    foo: 'bar'
}


Object.freeze(obj)

var app = new Vue({
    el: '#app',
    data: obj
})

