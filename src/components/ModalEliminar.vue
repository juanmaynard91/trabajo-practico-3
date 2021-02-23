<template >
   <div class="modal" tabindex="-1" id="EliminarModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Desea eliminar este lenguaje?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="$emit('delete')" data-dismiss="modal">Eliminar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
     
}
</script>

<style>   
</style>