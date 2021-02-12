<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-xs-12 centrar">
        <div class="card border-dark mb-3" style="width: 240px">
          <img src="../assets/iconoHTML.jpg" class="card-img-top" alt="html" />
          <div class="card-body">
            <h5 class="card-text">
              Es el lenguaje donde se define la información o el contenido del
              documento.
            </h5>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-xs-12 centrar">
        <div class="card border-dark mb-3" style="width: 240px">
          <img src="../assets/iconoCSS.jpg" class="card-img-top" alt="css" />
          <div class="card-body">
            <h5 class="card-text">
              Es el lenguaje donde se especifica el diseño del documento, maneja
              todo lo relacionado con la parte visual.
            </h5>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-xs-12 centrar">
        <div class="card border-dark mb-3" style="width: 240px">
          <img src="../assets/iconoJS.jpg" class="card-img-top" alt="js" />
          <div class="card-body">
            <h5 class="card-text">
              Es el lenguaje que hace que todo sea interactivo, es realmente el
              lenguaje de programación que nos permite crear sitios web.
            </h5>
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
/*cards*/
.centrar {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  text-align: center;
}

.card-body {
  background-color: lightgrey;
  color: black;
}
</style>