<template>
    <main>
    <Header />
        <section>
            
                <!-- <article >
                    <h3> {{task.title}}</h3>
                    <p>Categoria: {{task.category}}</p>
                    <h5>{{task.description}}</h5>
                    <p>{{task.frecuency}}</p>
                </article>
    -->

        <router-link class="btn-complete" to="/success" tag="button">Completada</router-link>
        </section>
    <Footer />




    </main>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
// import tasks from '@/assets/data/api.json'

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}
</script>


<style scoped> 

 

    main section {
        margin-top: 12vh;
    
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

    main section .btn-complete {
        /* display: flex;
        justify-content: center;
        align-content: center; */
        background-color: khaki;
    }


</style>