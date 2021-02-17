<template>
  <div>
    <ModalAgregar
      v-show="displayModalAgregar"
      @agregarLenguaje="PushearLenguaje"
    />

    <Cheaks @filtrarNuevos="filtrar" />

    <ArrayLenguaje
      :lenguajeArray="lenguajes"
      @delete="eliminarLeng"
      @editar="editarLeng"
      @editarFila="editar"
    />

    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#ModalAgregar"
      @click.prevent="displayModalAgregar = true"
    >
      Agregar lenguaje
    </button>
  </div>
</template>

<script>
import ArrayLenguaje from "./ArrayLenguaje.vue";
import Cheaks from "./Cheaks";
import ModalAgregar from "./ModalAgregar";

export default {
  name: "Table",
  components: {
    ArrayLenguaje,
    Cheaks,
    ModalAgregar,
  },

  data() {
    return {
      lenguajes: [],
      displayModalAgregar: false,
      checked: false,
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

    PushearLenguaje(leng) {
      console.log(leng);
      this.lenguajes.push(leng);
      /* this.lenguajes.sort(function (a, b) {
        return a.puesto - b.puesto;
      }); */
    },

    eliminarLeng(id) {
      console.log("entro");
      this.lenguajes = this.lenguajes.filter(
        (lenguaje) => lenguaje.id !== id.id
      );
      console.log(id.id);
    },
    editarLeng(lenguaje) {
      this.lenguajes = this.lenguajes.map((elem) => {
        let obj = elem; /*console.log (lenguaje, obj);*/
        if (obj.id == lenguaje.id) obj = lenguaje;
        return obj;
      });
      //this.lenguajes.sort(function(a,b){ return a.puesto -b.puesto})
    },

    editar(id) {
      console.log(id, this.lenguajes[id - 1]);
    },

    filtrar(checked) {
      console.log("filtrado");
      if (checked !== true) {
        this.lenguajes = this.lenguajes.filter(
          (lenguaje) => lenguaje.fecha >= 2000
        );
      } else {
        this.getLenguajes();
      }
    },
  },
};
</script>

<style>
</style>