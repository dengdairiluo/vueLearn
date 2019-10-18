var app = new Vue({
    el: '#app',
    data: {
        msg: 'This is message.',
        rawHtml: '<span style="color:red">This should be red.</span>'
    }
})

var app2 = new Vue({
    el: '#app2', 
    data: {
        seen: false,
        url: 'https://www.baidu.com'
    },
    methods: {
        doSomething: function() {
            alert('给你弹个alert');
        }
    }
})

var example = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})

var demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
})

var demo = new Vue({
    dl: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})
