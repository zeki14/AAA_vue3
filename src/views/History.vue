
 <template>
  <h1 class="h3 text-primary">
    <i class="fas fa-history"></i> Historial de logros
  </h1>
<ul></ul>
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
        ...mapActions(['setTask'])
    }
}
</script>
