<template>
  <footer>
      <ul>
        <li>
          <router-link to="/add"><i class="fas fa-plus-circle"></i></router-link>
        </li>

        <li>
          <router-link to="/"><i class="fas fa-tasks"></i></router-link>
        </li>
          
        <li>
         <router-link to="/history"><i class="fas fa-award"></i></router-link>
        </li>

      </ul>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

    footer {
      background-color: var(--secondary-color);
      position: fixed;
      bottom: 0;
      width: 100%;
      border-radius: 10px 10px 0 0;
      box-shadow: 0px -5px 30px 0px rgba(0, 0, 0, .25);
    }

    footer ul {
      padding: 1.5vh;
      display: flex;
      justify-content: space-around;
    }

    footer ul li i {
      color: var(--color-icons);
      font-size: 1.5rem;
    }

</style>