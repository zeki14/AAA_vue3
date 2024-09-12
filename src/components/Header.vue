<template>
  <header>
      <h3>Bienvenido!</h3>
      <img src="../assets/icons/user.svg" alt="avatar de usuario">
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

    header {
        position: fixed;
        top: 0;
        padding: 2vh;
        width: 100%;
        display: flex;
        justify-content:space-between;
        background-color: var(--secondary-color);
    }

    header img {
        width: 9vw;
        height: 9vw;
    }

</style>