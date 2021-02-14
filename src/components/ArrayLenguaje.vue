<template>
  <div>
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
          <button class="btn btn-warning" @click="editar(lenguaje.id)">
            Editar
          </button>
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
  name: "Arraylenguaje",
  props: {
    lenguajeArray: Array,
  },
  methods: {
    editar(id) {
      this.$emit("editarFila", id);
    },
    eliminar(id) {
      this.$emit("eliminarFila", id);
    },
  },
};
</script>

<style>
</style>