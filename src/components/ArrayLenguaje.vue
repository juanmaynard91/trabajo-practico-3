<template>
  <div>
     <ModalEliminar v-show="displayModalEliminar" @delete="eliminar"> </ModalEliminar>
     <ModalEditar v-show="displayModalEditar" @editarLenguaje="EditarLenguaje"> </ModalEditar>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Puesto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Año</th>
          <th scope="col">Opcion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lenguaje in lenguajeArray" :key="lenguaje.id">
          <td>{{ lenguaje.puesto }}</td>
          <td>{{ lenguaje.nombre }}</td>
          <td>{{ lenguaje.fecha }}</td>
           <!-- agregar botones de editar y eliminar -->
          <button class="btn btn-warning" @click="Aeditar(lenguaje.id)" data-toggle="modal" data-target="#ModalEditar" @click.prevent="displayModalEditar=true">Editar</button>

          <button class="btn btn-danger" @click="Aeliminar(lenguaje.id)" data-toggle="modal" data-target="#EliminarModal">
            Eliminar
          </button>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalEliminar from './ModalEliminar'
import ModalEditar from './ModalEditar'

export default {
  name: "Arraylenguaje",
  components:{
    ModalEliminar,
    ModalEditar
  },
  data() {
    return {
      displayModalEliminar: false,
      IdtoDelete:null,
      displayModalEditar:false,
      IdtoEdit:null,
      lengEditado:[],
    }
  },
  props: {
    lenguajeArray: Array,
  },
  methods: {
       Aeliminar(id) {
          this.displayModalEliminar=true;
          this.IdtoDelete = id;
    },
     eliminar() {
      this.$emit("delete", {id:this.IdtoDelete} ); console.log("array", this.IdtoDelete)
      },

     Aeditar(id) {
          this.IdtoEdit = id;
    },
    EditarLenguaje(lang){
      this.$emit("editar", {id:this.IdtoEdit, puesto:lang.puesto, nombre:lang.nombre, fecha:lang.fecha} );
      
    }
},
}
</script>

<style>
</style>