<template>
    <main>
    <Header />
        <section>
            <router-link to="/detail">
                <article v-for="task in items" :key="task.id">

                    <h3 class="btn btn-danger"> {{task.title}}</h3>

                    <h3> {{task.title}}</h3>

                    <p>Categoria: {{task.category}}</p>
                    <h5>{{task.description}}</h5>
                    <!-- <ul>
                        <li v-for="step in steps" :key="step.id">
                            {{step.text}}
                        </li>
                        
                    </ul> -->
                    <p>{{task.frecuency}}</p>
                </article>
            </router-link>
        </section>
    <Footer />




    </main>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import tasks from '@/assets/data/api.json'

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  },
  computed: {
    items() {
      return tasks.map((task) => {
        return task
      })
    }

  }
}
</script>


<style scoped> 

    main {
        background-color: var(--secondary-color);
    }

    main section {
        margin-top: 8vh;
    }

    main section article {
        width: 80vw;
        height: 20vh;
        margin: auto;
        margin-top: 2vh; 
        border-radius: 10px;
        background-color: var(--input-color);
        /* display: grid;
        grid-template-areas: "i t" "i d" "i p" "i ic";
        grid-template-columns: 30vw 1fr;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
    }

    main section article h3 {
        grid-area: t;
        padding: 1vh;
    }

    main section article h5:nth-child(2) {
        grid-area: d;
        padding: 1vh;
    }

    main section article h5:nth-child(3) {
        grid-area: p;
        padding: 1vh;
    }

    main section article img {
        grid-area: i;
        background-color: var(--contact-color);
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    main section article span {
        grid-area: ic;
        padding: 1vh;
    }

</style>



