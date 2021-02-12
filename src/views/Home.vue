<template>
  <div class="home">
    <h3>{{ titulo }}</h3>
    <Carrusel></Carrusel>
    <Cards></Cards>
  </div>
</template>

<script>
import Carrusel from "../components/Carrusel";
import Cards from "../components/Cards";

export default {
  data() {
    return {
      titulo: "¿Qué es HTML/CSS/JS?",
    };
  },
  name: "Home",
  components: {
    Carrusel,
    Cards,
  },
};
</script>
