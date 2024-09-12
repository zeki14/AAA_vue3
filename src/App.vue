<template>
  <div id="nav">
  </div>
  <router-view/>
</template>
<script>
  // import NewTask from './components/NewTask.vue'
  // import Home from './components/Todos.vue'

// export default {
//   name: 'app',
//   components: {
//       Todos,
//       AddTodoItem
//   },
//     data() {
//       return {
//           todo_items : []
//       }
//     },
//     methods: {
//         addTodoMethod(newTodoItem){
//             this.todo_items = [...this.todo_items, newTodoItem]
//       }
//     },
//     mounted(){
//       console.log('App Mounted');
//         if (localStorage.getItem('todo_items'))
//             this.todo_items = JSON.parse(localStorage.getItem('todo_items'));
//     },
//     watch: {
//         todo_items: {
//             handler() {
//                 console.log('Todo Items array changed!');
//                 localStorage.setItem('todo_items', JSON.stringify(this.todo_items));
//             },
//             deep: true,
//         },
//     },
// }
</script>
<style>

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  :root {
      --primary-color: #C1545A;
      --secondary-color: #F6F6F6;
      --color-icons: #C1545A;
      --input-color: #E3E3E3;
      --color-button: #DFBFC0;
      --complementary-color: #B8B5FF;
      --contact-color: #DFBFC0;
      --input-color: #E3E3E3;
      --border-contact-color: #C1545A;
      --font-family: 'Redressed', cursive;
  }

</style>

