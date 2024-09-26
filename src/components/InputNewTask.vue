<template>
    <section>
        <label >Nombre del reto</label>
        <input 
            type="text" 
            name="name" 
            v-model="task.name" 
            placeholder="Nombre del reto">
       
        <label for="category" >Categoría</label>
        <select 
            id= "category" 
            name="category" 
            v-model="task.category" 
            placeholder="Categoria">
                <option value="value1">Hogar</option>
                <option value="value2" >En la calle</option>
                <option value="value3">Actividad social</option>
        </select>

        <label for="description">Descripción</label>
        <textarea 
            id="description" 
            name="description" 
            v-model="task.description" 
            rows="4" cols="50"  
            placeholder="Escribe un texto...">
        </textarea>

        <label for="steps">Pasos</label>
        <textarea 
            id="steps" 
            name="steps"
            v-model="task.steps" 
            rows="4" cols="50"  
            placeholder="Escribe los pasos a seguir...">
        </textarea>

        <label for="clues">Pistas</label>
        <textarea 
            id="clues"
             name="clues" 
             v-model="task.clues" 
             rows="4" cols="50"  
             placeholder="Escribe las pistas...">
        </textarea>


        <button 
            class="btn btn-secondary d-block mx-auto mt-2 " 
            type="submit"
            :disabled="bloquear"
        >
        Añadir
        </button>
    </section>
</template>

<script>
    export default {
        props:{
            task: Object
        },
        computed: {
            bloquear(){
                return this.task.name === "" ? true : false
            }
        }
    }

</script>

<style scoped>
    label{
        display: block;
    }
   section  input,
   section  select,
   section  textarea {
    margin-top: 1vh;
    margin-bottom: 2vh;
    margin-top: 1vh;
    padding: 1vh 1vh 1vh 1vh;
    border: none;
    background-color: var(--input-color);
    border-radius: 5px;
  }

   section  input:focus {
    outline: none;
  }



  .btn-secondary {
      width: 300px;
      align-self: center;
  }

</style>