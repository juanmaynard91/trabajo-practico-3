<template>
     <div >
            <div @submit.prevent='editarLenguaje' class="modal fade" id="ModalEditar" tabindex="-1" aria-labelledby="ModalEditar" aria-hidden="true"> 
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
                    <input type="text" class="form-control" id="PuestoEdit" placeholder="puesto" v-model="puestoEditar" required>
                   </div>
                   <div class="form-group">
                      <label for="Nombre">Nombre</label>
                     <input type="text" class="form-control" id="NombreEdit" placeholder="Ingrese el nombre del lenguaje" v-model="nombreEditar" required>
                   </div>
                 <div class="form-group">
                 <label for="Fecha">Fecha</label>
                 <input type="text" class="form-control" id="FechaEdit" placeholder="Ingrese la fecha de creación del lenguaje" v-model="fechaEditar" required>
                </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" @click='limpiarInput'>Cerrar</button>
                  <button type="submit" class="btn btn-primary"  >Guardar cambios</button>
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
          puesto: '', nombre:'', fecha:''
       }
    },
    props:{
       puestoEditar:{
          type:Number,
          required:true,
       },
      //    idEditar:{
      //     type:Number,
      //     required:true,
      //  },
       nombreEditar:{
          type:String,
          required:true,
       },
       fechaEditar:{
          type:String,
          required:true,
       }
      // lenguaje:{
      //    type:Object,
      //    required:true,
      // }
    },
    methods: {
       editarLenguaje(){
          console.log("entro");
           $('#ModalEditar').modal('hide');
          this.$emit("editarLenguaje", {puesto:this.puestoEditar, nombre:this.nombreEditar, fecha:this.fechaEditar});
          // this.puesto='';
          // this.nombre='';
          // this.fecha='';
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