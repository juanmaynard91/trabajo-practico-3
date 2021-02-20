<template>
  <div class="Home">
    <h2 v-miDirectiva="'lightgrey'">{{ titulo | toUppercase }}</h2>
    <Carrusel />
    <h3 v-miDirectiva="'lightgrey'">{{ parrafo }}</h3>
    <Cards />
  </div>
</template>

<script>
import Carrusel from "../components/Carrusel";
import Cards from "../components/Cards";

export default {
  name: "Home",
  components: {
    Carrusel,
    Cards,
  },
  data() {
    return {
      titulo: "¿Qué es HTML/CSS/JS?",
      parrafo:
        "HTML, CSS y JavaScript son los tres lenguajes que se utilizan para crear aplicaciones web",
    };
  },
};
</script>
