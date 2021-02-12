<template>
  <div>
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agregar</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="number"
              v-model="puesto"
              placeholder="Agregar puesto"
            />
            <br />
            <input
              type="text"
              v-model="nombre"
              placeholder="Agregar lenguage"
            />
            <br />
            <input type="number" v-model="año" placeholder="Agregar año" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              class="btn btn-success d-flex justify-content-between"
              @click="agregar()"
            >
              Agregar Tarea
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>