<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" class="btn-check" id="filtrarNuevos" autocomplete="off" v-model="checked" @click="filtrarTabla(checked)">
      <label class="btn btn-primary" for="filtrarNuevos">{{ checked ? "Mostrar todos" : "Filtrar nuevos" }}</label>
    </div>
  </div>
</template>

<script>
export default {
    name: "Cheaks",
    data(){
      return{
          checked: false,
      }
    },
    methods:{
        filtrarTabla(checked){
          this.$emit("filtrarNuevos", checked)
        }
    },
}
</script>

<style>
</style>