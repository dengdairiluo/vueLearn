
Vue.component('blog-post', {
    props: ['postTitle'],
    tempalte: '<h3>{{ postTitle }}</h3>'
  })
  
  var app = new Vue({
    el: '#app',
    data: {
      postTitle: ''
    }
  })