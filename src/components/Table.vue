<template>
  <div>
    <button class="btn btn-primary" @click="filtrar()">Filtrar nuevos</button>

    <input type="text" v-model="puesto" />
    <input type="text" v-model="nombre" />
    <input type="text" v-model="fecha" />
    <button class="btn btn-success" @click="agregar()">Agregar</button>

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
        <tr v-for="lenguaje in lenguajes" :key="lenguaje.id">
          <td>{{ lenguaje.puesto }}</td>
          <td>{{ lenguaje.nombre }}</td>
          <td>{{ lenguaje.fecha }}</td>

          <!-- agregar botones de editar y eliminar -->
          <button class="btn btn-warning" @click="editar()">Editar</button>
          <button class="btn btn-danger" @click="eliminar(lenguaje.id)">
            Eliminar
          </button>

          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",

  data() {
    return {
      lenguajes: [],
      puesto: "",
      nombre: "",
      fecha: "",
      
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
      });
      (this.puesto = ""), (this.nombre = ""), (this.fecha = "");
    },

    eliminar(id) {
      this.lenguajes = this.lenguajes.filter((lenguaje) => lenguaje.id !== id);
    },

    editar() {
      console.log(event.target.innerHTML);
    },

    filtrar() {
      this.lenguajes = this.lenguajes.filter(
        (lenguaje) => lenguaje.fecha >= 2000
      );
      console.log(this.lenguajes);
    },
  },
};
</script>

<style>
</style>