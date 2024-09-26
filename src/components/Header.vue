<template>
   <header class=" d-flex flex-row flex-nowrap shadow justify-content-around bgColor pt-2 pb-2 px-3">
            <h1 class="h1 ">Bienvenid@ <br> a tu lista de retos</h1>
            <!-- <img class="img-fluid " src="../assets/icons/asperlog.png" alt="logo asociacion"> -->
  </header>
      <hr class="mb-3 mx-3 bgPrimaryColor">
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    /* hr {
        border: 1px solid var(--primary-color);
    } */
    header img {
      width: 15vw;
      height: 15vw;
      max-width: 100px;
      max-height: 100px;
      align-self: center;
    }
        hr {
        margin: 0 12px 15px 12px ;
    }
</style>