<template>
     <div >
            <div class="modal fade" id="ModalEditar" tabindex="-1" aria-labelledby="ModalEditar" aria-hidden="true"> 
              <div class="modal-dialog">
               <div class="modal-content">
                <div class="modal-header">
                   <h5 class="modal-title">Editar lenguaje</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                </div>
               <div class="modal-body">
                  <form >
                     <div class="form-group">
                    <label for="Puesto" class="form-label">Puesto</label>
                    <input type="text" class="form-control" id="Puesto" placeholder="puesto" v-model="puesto">
                   </div>
                   <div class="form-group">
                      <label for="Nombre">Nombre</label>
                     <input type="text" class="form-control" id="Nombre" placeholder="Ingrese el nombre del lenguaje" v-model="nombre">
                   </div>
                 <div class="form-group">
                 <label for="Fecha">Fecha</label>
                 <input type="text" class="form-control" id="Fecha" placeholder="Ingrese la fecha de creación del lenguaje" v-model="fecha">
                </div>
               </form>          
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" @click='limpiarInput'>Cerrar</button>
                  <button type="submit" class="btn btn-primary" data-dismiss="modal" @click='editarLenguaje'>Guardar cambios</button>
              </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data() {
       return {
          puesto: '', nombre:'', fecha:''
       }
    },
    methods: {
       editarLenguaje(){
          console.log("entro");
          this.$emit("editarLenguaje", {puesto:this.puesto, nombre:this.nombre, fecha:this.fecha});
    },
          limpiarInput(){
          this.puesto='';
          this.nombre='';
          this.fecha='';
       }
    },
};
</script>

<style>
</style>