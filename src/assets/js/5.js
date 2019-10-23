var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: "Foo" },
            { message: "Bar" }
        ]
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: "Parent",
        items: [
            { message: "Foo" },
            { message: "Bar" }
        ]
    }
})

var vforobject = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})

var app1 = new Vue({
    el: "#app1",
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
      },
      computed: {
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }
})