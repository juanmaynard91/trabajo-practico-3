<template>
  <div class="carrusel">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/carrusel1.jpg" class="d-block" alt="carrusel1" />
        </div>
        <div class="carousel-item">
          <img src="../assets/carrusel2.jpg" class="d-block" alt="carrusel2" />
        </div>
        <div class="carousel-item">
          <img src="../assets/carrusel3.jpg" class="d-block" alt="carrusel3" />
        </div>
        <div class="carousel-item">
          <img src="../assets/carrusel4.jpg" class="d-block" alt="carrusel4" />
        </div>
        <div class="carousel-item">
          <img src="../assets/carrusel5.jpg" class="d-block" alt="carrusel5" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.carrusel {
  /*bordes redondos*/
  overflow: hidden;
  border-radius: 5px;
}

img {
  height: 270px;
  width: 100%;
  /*esto es para no perder calidad de imagen del carrusel*/
  object-fit: cover;
}
</style>