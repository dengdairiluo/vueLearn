var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        hasError: false
    }
})

var app1 = new Vue({
    el: "#app1",
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        },
        isActive: this
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {

    }
})

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var app4 = new Vue({
    el: '#app4',
    data: {

    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})