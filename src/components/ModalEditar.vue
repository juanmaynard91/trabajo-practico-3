<template>
     <div >
        <!-- Modal de bootstrap -->
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
                    <input type="number" class="form-control" id="PuestoEdit" placeholder="puesto" v-model="MostrarPuesto" @change="puesto=$event.target.value" required>
                   </div>
                   <div class="form-group">
                      <label for="Nombre">Nombre</label>
                     <input type="text" class="form-control" id="NombreEdit" placeholder="Ingrese el nombre del lenguaje" v-model="MostrarNombre" @change="nombre=$event.target.value" required>
                   </div>
                 <div class="form-group">
                 <label for="Fecha">Fecha</label>
                 <input type="number" class="form-control" id="FechaEdit" placeholder="Ingrese la fecha de creación del lenguaje" v-model="MostrarFecha" @change="fecha=$event.target.value" required>
                </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="cerrar" >Cerrar</button>
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
          //armamos una data par trabajar los valores en forma local y relacionarlos con los imputs
          puesto: this.puestoEditar, nombre:this.nombreEditar, fecha:this.fechaEditar
       }
    },

    //recibibimos en las props la info que manda el padre
    props:{
       puestoEditar:{
          type:Number,
          required:true,
       },

       nombreEditar:{
          type:String,
          required:true,
       },
       fechaEditar:{
          type:Number,
          required:true,

       }
 
    },
      //inicializamos la data con los valores de las props
      beforeUpdate() {
         this.puesto = this.puestoEditar;
         this.nombre = this.nombreEditar;
         this.fecha = this.fechaEditar;
      },

   //son las funciones que interactuan con el imput
   computed:{
      MostrarPuesto:{
         get(){
            return this.puestoEditar
         },
         set(value){
            this.puesto=value
         }
      },
      MostrarNombre:{
         get(){
            return this.nombreEditar
         },
         set(value){
            this.nombre=value
         }
      },
      MostrarFecha:{
         get(){
            return this.fechaEditar
         },
         set(value){
            this.fecha=value
         }
      },
   },

    methods: {
       editarLenguaje(){
          //cerramos el modal y emitimos los nuevos valores tomados por los imputs al padre
           $('#ModalEditar').modal('hide');
            this.$emit("editarLenguaje", {puesto:Number(this.puesto), nombre:this.nombre, fecha:Number(this.fecha)});
    },
       //cuando cancelamos el modal, lo cerramos dejando el contenido del imput como estaba al abrirlo para el caso de
       //que inmediatamente se quiera hacer click sobre el mismo elemento para editarlo
       cerrar() {
          $('#ModalEditar').modal('hide');
          this.puesto=this.puestoEditar;
          this.nombre=this.nombreEditar;
          this.fecha=this.fechaEditar;
          $("#PuestoEdit").val(this.puestoEditar)
          $("#NombreEdit").val(this.nombreEditar)
          $("#FechaEdit").val(this.fechaEditar)
       }
}
}
</script>

<style>
</style>