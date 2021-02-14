<template>
  <div>
     
    <!-- <button class="btn btn-primary" @click="mostrarTodo()">Mostrar todo</button>
    <button class="btn btn-primary" @click="filtrar()">Filtrar nuevos</button> 
    <ModalAgregar /> -->
    <Cheaks />

    <input type="text" v-model="puesto" />
    <input type="text" v-model="nombre" />
    <input type="text" v-model="fecha" />
    <button class="btn btn-success" @click="agregar()">Agregar</button>

    <ArrayLenguaje
      :lenguajeArray="lenguajes"
      @editarFila="editar"
      @eliminarFila="eliminar"
    />
  </div>
</template>

<script>
import ArrayLenguaje from "./ArrayLenguaje.vue";
import Cheaks from "./Cheaks";
// import ModalAgregar from "./ModalAgregar";

export default {
  name: "Table",
  components: {
    ArrayLenguaje,
    Cheaks,
    //ModalAgregar,
  },

  data() {
    return {
      lenguajes: [],
      puesto: "",
      nombre: "",
      fecha: "",
      id: 16, // lo inicializo en 16 porque si arranco de 0 me tira error (ID duplicados)
    };
  },

  // hook
  mounted() {
    this.getLenguajes();
  },

  methods: {
    getLenguajes() {
      fetch("https://602549ce36244d001797bed6.mockapi.io/Lenguajes")
        .then((res) => res.json())
        .then((data) => {
          this.lenguajes = data;
        });
    },

    agregar() {
      this.lenguajes.push({
        puesto: this.puesto,
        nombre: this.nombre,
        fecha: this.fecha,
        id: this.id,
      });
      this.puesto = "", 
      this.nombre = "", 
      this.fecha = "", 
      this.id++;
    },

    eliminar(id) {
      this.lenguajes = this.lenguajes.filter((lenguaje) => lenguaje.id !== id);
    },

    editar(id) {
      console.log(id, this.lenguajes[id - 1]);
    },

    filtrar() {
      this.lenguajes = this.lenguajes.filter(
        (lenguaje) => lenguaje.fecha >= 2000
      );
    },

    // v-show junto con filtrar o v-if con v-else
    mostrarTodo() {
      this.getLenguajes();
    },
  },
};
</script>

<style>
</style>