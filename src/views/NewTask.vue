<template>
  <main>

    <section>
      <form >
        <label>Nombre del reto</label>
        <input type="text" placeholder="Nombre del reto">
       
        <label for="category">Categoría</label>
        <select id= "category" name="category" placeholder="Categoria">
                <option value="value1">Hogar</option>
                <option value="value2" >En la calle</option>
                <option value="value3">Actividad social</option>
        </select>

        <label for="description">Descripción</label>
        <textarea id="description" name="description" rows="4" cols="50"  placeholder="Escribe un texto...">
        </textarea>

        <label>Pasos</label>
        <textarea id="steps" name="steps" rows="4" cols="50"  placeholder="Escribe los pasos a seguir...">
        </textarea>

        <label>Pistas</label>
        <textarea id="clues" name="clues" rows="4" cols="50"  placeholder="Escribe las pistas...">
        </textarea>

        <label>Frecuencia</label>
        <select name="veces">
                <option value="value1">1 vez</option>
                <option value="value2">2 veces</option>
                <option value="value3">3 veces</option>
                <option value="value1">4 vez</option>
                <option value="value2" >5 veces</option>
                <option value="value3">6 veces</option>
                <option value="value3">Cada día</option>
        </select>
        <select name="periodo">
                <option value="value1">a la semana</option>
                <option value="value2">al mes</option>
        </select>

      
        
        <button class="btn-saving" @click="activeSingUpForm = false">Guardar</button>
      </form>
    </section>
    <Footer />
  </main>
</template>

<script scoped>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  }
}

</script>


<style scoped>

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }

  main section form {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    margin: 2em;
  }

  main section form input,
  main section form select,
  main section form textarea {
    margin-top: 2vh;
    padding: 1vh 1vh 1vh 1vh;
    border: none;
    background-color: var(--input-color);
    border-radius: 5px;
  }

  main section form input:focus {
    outline: none;
  }



  .btn-saving {
    margin-top: 3vh;
    padding: 1vh;
    background-color: var(--complementary-color);
  }

</style>