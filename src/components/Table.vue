<template>
  <div>
    <ModalAgregar
      v-show="displayModalAgregar"
      @agregarLenguaje="PushearLenguaje"
    />

    <Cheaks @filtrarNuevos="filtrar" />

    <!-- lenguajeArrays prop del componente padre recibe dinamicamente el array lenguajes -->
    <ArrayLenguaje
      :lenguajeArray="lenguajes"
      @delete="eliminarLeng"
      @editar="editarLeng"
    />

    <div v-if="mostrarBarra" class="progress mb-3">
      <div
        id="progressBar"
        v-bind:class="{
          'progress-bar progress-bar-striped progress-bar-animated w3-container w3-round w3-blue inicio transicion': !completarBarra,
          'progress-bar progress-bar-striped progress-bar-animated w3-container w3-round w3-blue transicion final': completarBarra,
        }"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

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
      completarBarra: false,
      mostrarBarra: false,
      id: 0,
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
          this.id = this.lenguajes.length;
        });
    },

    PushearLenguaje(leng) {
      (this.mostrarBarra = true),
        setTimeout(() => {
          this.completarBarra = true;
        }, 500);
      setTimeout(() => {
        (this.completarBarra = false), (this.mostrarBarra = false);
        this.id++;
        let objeto = {
          id: this.id,
          puesto: leng.puesto,
          nombre: leng.nombre,
          fecha: leng.fecha,
        };
        this.lenguajes.push(objeto);
        this.lenguajes.sort(function (a, b) {
          return a.puesto - b.puesto;
        });
      }, 2000);
    },

    // devuelve todo el arreglo que no tenga ese id
    eliminarLeng(id) {
      this.lenguajes = this.lenguajes.filter(
        (lenguaje) => lenguaje.id !== id.id
      );
    },

    editarLeng(lenguaje) {
      (this.mostrarBarra = true),
        setTimeout(() => {
          this.completarBarra = true;
        }, 500);
      setTimeout(() => {
        (this.completarBarra = false), (this.mostrarBarra = false);
        this.lenguajes = this.lenguajes.map((elem) => {
          let obj = elem;
          if (obj.id == lenguaje.id) obj = lenguaje;
          return obj;
        });
        this.lenguajes.sort(function (a, b) {
          return a.puesto - b.puesto;
        });
      }, 2000);
    },

    filtrar(checked) {
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

<style scoped>
.inicio {
  width: 0%;
}
.transicion {
  transition: width 2s;
}
.final {
  width: 100%;
}
</style>