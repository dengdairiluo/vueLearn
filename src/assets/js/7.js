var example3 = new Vue({
    el: '#example-3',
    data: {
        checkedNames: []
    }
})

var example4 = new Vue({
    el: '#example-4',
    data: {
        picked: ''
    }
})

var example5 = new Vue({
    el: '#example-5',
    data:{
        selected: ''
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        selected: 'A',
        options: [
            {text: 'One', value: 'A'},
            {text: 'Two', value: 'B'},
            {text: 'Three', value: 'C'}
        ]
    }
})

// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'