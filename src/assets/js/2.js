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

var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data
vm.$el === document.getElementById('example')

vm.$watch('a', function(newValue, oldValue) {
      // 这个回调将在 `vm.a` 改变后调用
})

var tmpVm = new Vue({
    data: {
        a: 1
    },
    created: function() {
        console.log('a is: ' + this.a)
    }
})