<template>
    <main>
        <article  v-for="task in tasks" :key="task.id">
            <ul @click="goTodetail(task.id)" class="card py-3 textPrimary shadow-sm p-3 mb-4 bg-body">
                <li  class="h5 textInBlack mb-1 "> {{task.name}}</li>

                <li class="h6 fst-italic fw-light mx-5">Categoria: {{task.category}}</li>

                <li class="p textInBlack">{{task.description}}</li>
                    
                <li class="p textInBlack fw-bolder mx-5">{{task.frecuency}}</li>
            </ul>

        </article>
    </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Home',
   computed: {
        ...mapState(['tasks'])
    },
    methods:{
        goTodetail(id) {
            let taskId = id
            this.$router.push({name:'Detail',params:{id:taskId}}) }
    }
}
</script>


<style scoped> 


</style>



