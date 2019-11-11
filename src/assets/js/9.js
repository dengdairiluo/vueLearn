
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })
  
  Vue.component('my-component', {
    template: '<p>A custom component!</p>'
  })

  var app = new Vue({
    el: '#app',
    data: {
      post: {
        title: 'My journey with Vue',
        author: {
          name: 'dengdairiluo'
        }
      }
    },

  })