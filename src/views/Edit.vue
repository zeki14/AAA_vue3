<template>
  <h1 class="h3 text-primary">
    <i class="fas fa-edit"></i>  Editar... {{task.name}}
  </h1>
  <form @submit.prevent="updateTask(task)">
        <InputNewTask :task="task" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InputNewTask from "../components/InputNewTask";
export default {
    components: {
        InputNewTask
    },
    computed:{
        ...mapState(['task'])
    },
    methods: {
        ...mapActions(['setTask','updateTask'])
    },
    created(){
        this.setTask(this.$route.params.id)
    }
}
</script>

<style scoped>
 form{
     padding-bottom: 80px;
 }

</style>

