  
<template>
 
    <div class="container">
        <div class="d-flex flex-row justify-content-between">
            <h1 class="h3 text-primary"><i class="fas fa-info-circle"></i>  Al detalle:</h1>
        </div>
            <div class="col-md-12" v-for="task in tasks" :key="task.id">
                <div  v-if="taskId == task.id">
                        <button class="btn btn-danger btn-sm mb-3 mx-2" @click="deleteTasks(taskId)">
                            Eliminar
                        </button>
                        <button @click="goToEdit(task.id)" class="btn btn-primary btn-sm mb-3">
                            Editar
                        </button>       
                    <div class="card p-2 mb-3 mx-3 shadow-sm">
                        <h2 class="textInBlack text-center">{{task.name}}</h2>

                        <div class="d-flex flex-row justify-content-between">
                            <h5 class="h6 fst-italic fw-light mx-2">Categoria: {{task.category}}</h5>
                            <p class="p textInBlack fw-bolder mx-2">{{task.frecuency}}</p>
                        </div>

                        <h6 class="p textInBlack">{{task.description}}</h6>
                    </div> 
                    <h3 class="p text-primary fw-bolder mx-1"><i class="fs-3 fas fa-shoe-prints"></i>   Pasos a seguir:</h3>
                    <ol > 
                        <!-- <li v-for="step in task.steps" :key="step.key"> -->
                            <p>{{ task.steps }}</p>
                    </ol> 
        
                    <div class="col text-center">
                        <router-link class="btn btn-success btn-lg shadow-sm mb-4" to="/success" tag="button" @click="completedTask">¡CONSEGUIDO!</router-link>
                    </div>

                    <h3 class="p text-primary fw-bolder mx-1"><i  class="fs-3 di fas fa-search-plus"></i>  Algunas pistas:</h3>
                    <ol>        
                        <!-- <li v-for="clue in task.clues" :key="clue.id"> -->
                            <p> {{task.clues}}</p>
                    
                    </ol> 
            </div>
        </div>
    </div>

</template>
<script>
import { mapState, mapActions } from "vuex";

 export default {
    name:'Detail',
     data(){
   return{
    taskId:this.$route.params.id,
        }
    },
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['deleteTasks']),
    
        goToEdit(id) {
            let taskId = id
            this.$router.push({name:'Edit',params:{id:taskId}}) },

        completedTask(id) {
                
        }
    }

 }
</script>
    

<style scoped> 
    .card{
        border-radius: 12px;
    }
    .btn-success{
        width: 250px;
    }
    .container{
        padding-bottom: 80px;
    }
</style>