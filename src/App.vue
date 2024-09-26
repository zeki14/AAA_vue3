<template>

  <Header class="navbar" />

    <div class="container">
      <main class="col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6 mx-auto ">
        <div class="row justify-content-center">
          <router-view class="col routerLink" />
        </div>
      </main>
      </div>
  <Footer class="col" />
</template>
<script>
  import { mapActions} from "vuex";
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    components: {
      Header,
      Footer
    },
    methods: {
      ...mapActions(['getLocalStorage'])
    },
    created(){
      this.getLocalStorage()
    }
  }
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

