<template>
  <main>
    <h1 class="h3 text-primary">
      <i class="fas fa-plus-square"></i>  ...un nuevo reto
    </h1>
    <form @submit.prevent="processForm">

      <InputNewTask :task="task" />

    </form>
 
  </main>
</template>

<script>
import InputNewTask from '@/components/InputNewTask.vue'
import { mapActions } from "vuex";
const shortid = require('shortid');

export default {
  name:'NewTask',
  components: {
      InputNewTask
  },
  data() {
    return {
      task: {
        id: '',
        name: '',
        category: '',
        description: '',
        steps: '',
        clues: '',
        times: '',
        period:''
      }
    }
  },
  methods: {
    ...mapActions(['setTasks']),
    processForm(){
      console.log(this.task)
      if(this.task.name === ""){
        console.log('Empty field')
        return
      }
      console.log('Is not empty')
      
      //generar id aleatorio
      this.task.id = shortid.generate()
      console.log(this.task.id)
      
      //envian los datos
      this.setTasks(this.task)

      //limpiar datos
      this.task = {
        id: '',
        name: '',
        category: '',
        description: '',
        steps: '',
        clues: '',
        times: '',
        period:''
      }
    }
  }


}

</script>

<style scoped>
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin-bottom: 80px;
  }

  main form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
  }
</style>
