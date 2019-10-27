
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
    data: {
        selected: ''
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})



Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var componentsDemo = new Vue({ el: '#components-demo' })

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })

var blogpost = new Vue({el : '#blogpost'})

var blogpostdemo = new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            {id : 1, title: 'My journey with Vue'},
            {id : 2, title: 'Blogging with Vue'},
            {id : 3, title: 'Why Vue is so fun'}
        ]
    }
})