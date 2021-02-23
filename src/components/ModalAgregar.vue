<template >
    <div >
            <div @submit.prevent='agregarLenguaje' class="modal fade" id="ModalAgregar" tabindex="-1" aria-labelledby="ModalAgregar" aria-hidden="true"> 
              <div class="modal-dialog">
               <div class="modal-content">
                <div class="modal-header">
                   <h5 class="modal-title">Agregar lenguaje</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                </div>
               <div class="modal-body">
                  <form >
                     <div class="form-group">
                    <label for="Puesto" class="form-label">Puesto</label>
                    <input type="text" class="form-control" id="Puesto" placeholder="Ingrese el puesto del lenguaje" v-model="puesto" required>
                   </div>
                   <div class="form-group">
                      <label for="Nombre">Nombre</label>
                     <input type="text" class="form-control" id="Nombre" required placeholder="Ingrese el nombre del lenguaje" v-model="nombre">
                   </div>
                 <div class="form-group">
                 <label for="Fecha">Fecha</label>
                 <input type="text" class="form-control" id="Fecha" required placeholder="Ingrese la fecha de creación del lenguaje" v-model="fecha">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" @click='limpiarInput'>Cerrar</button>
                  <button type="submit" class="btn btn-primary" >Agregar</button>
              </div>
               </form>          
               </div>
               
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  
    data() {
       return {
          puesto: '',
          nombre:'',
          fecha:'' , 
          id: 16,  // lo inicializo en 16 porque si arranco de 0 me tira error (ID duplicados)
       }
    },

    methods: {
       agregarLenguaje(){
            console.log("entro");
            $('#ModalAgregar').modal('hide');
            this.$emit("agregarLenguaje", {puesto:this.puesto, nombre:this.nombre, fecha:this.fecha ,id: this.id});
            this.puesto='';
            this.nombre='';
            this.fecha='';
            this.id++;
    },
       limpiarInput(){
          this.puesto='';
          this.nombre='';
          this.fecha='';
       }
    },
}
</script>

<style >
</style>