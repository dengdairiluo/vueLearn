Vue.component('my-component-name', { /* ... */ })

Vue.component('component-a', { /* ... */ })
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

new Vue({ el: '#app' })

// var ComponentA = { /* ... */ }
// var ComponentB = { /* ... */ }
// var ComponentC = { /* ... */ }

// new Vue({
//   el: '#app',
//   components: {
//     'component-a': ComponentA,
//     'component-b': ComponentB
//   }
// })

// import ComponentA from './ComponentA'
// import ComponentC from './ComponentC'

// export default {
//   components: {
//     ComponentA,
//     ComponentC
//   },
// ...
// }

// import BaseButton from './BaseButton.vue'
// import BaseIcon from './BaseIcon.vue'
// import BaseInput from './BaseInput.vue'

// export default {
//   components: {
//     BaseButton,
//     BaseIcon,
//     BaseInput
//   }
// }

// import Vue from 'vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   './components',
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /Base[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName)

//   // 获取组件的 PascalCase 命名
//   const componentName = upperFirst(
//     camelCase(
//       // 获取和目录深度无关的文件名
//       fileName
//         .split('/')
//         .pop()
//         .replace(/\.\w+$/, '')
//     )
//   )

//   // 全局注册组件
//   Vue.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })



// props: ['title', 'likes', 'isPublished', 'commentIds', 'author']

// props: {
//   title: String,
//   likes: Number,
//   isPublished: Boolean,
//   commentIds: Array,
//   author: Object,
//   callback: Function,
//   contactsPromise: Promise // or any other constructor
// }
