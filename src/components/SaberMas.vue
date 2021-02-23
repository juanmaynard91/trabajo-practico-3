<template>
  <div>
    <h2 v-miDirectiva="'lightgrey'">{{ titulo }}</h2>

    <div class="container">
      <div>
        <div class="card mb-3" style="max-width: 1000px">
          <div class="row g-0">
            <div class="col-md-4">
              <img style="height: 100%" src="../assets/HTML.gif" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">HTML</h4>
                <p class="card-text">
                  La primera tecnología de desarrollo web que debe aprenderse es
                  HTML. HTML es para las aplicaciones web lo que los cimientos
                  son para un edificio. HTML nació en la universidad para
                  relacionar documentos entre sí. Facilitó la búsqueda de
                  documentos con contenido similar. Sin embargo, la evolución de
                  la web ha llevado a utilizar HTML como documento base para
                  crear aplicaciones web. Desde la versión 5, este lenguaje de
                  marcado, agregó semántica a las etiquetas. Esto permitió crear
                  documentos que son interpretados por otros sistemas de
                  información. El mayor inconveniente al aprender HTML es el
                  horrible aspecto visual que tendrán tus aplicaciones. Esto
                  puede ser desalentador, ya que puedes tener la sensación de
                  que tu esfuerzo y resultados no están apareciendo. Por lo
                  general, aprendemos HTML al mismo tiempo que CSS. El uso de
                  CSS para agregar estilo a nuestras aplicaciones web ayuda a
                  que el aspecto visual mejora considerablemente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="card mb-3" style="max-width: 1000px">
          <div class="row g-0">
            <div class="col-md-4">
              <img style="height: 100%" src="../assets/CSS.gif" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">CSS</h4>
                <p class="card-text">
                  El siguiente paso que debes tomar para ser desarrollador web
                  es aprender CSS. Si HTML es la base CSS es como la pintura,
                  decoracion o personalizacion de la casa. A primera vista
                  parece que no es util, pero esta caracteristica es la que
                  conquista a los clientes y por lo tanto, la que genera dinero.
                  Aquellos que no aprecian la importancia de CSS puede estar
                  interesados en saber que la mayoria de las veces no importa
                  que tecnologia este detras de nuestra aplicacion web si no
                  tiene un buen aspecto visual. La mayoria de las veces, un
                  cliente no pagara por un producto que no encuentre visualmente
                  atractivo. Sin embargo, lo mas probable es que aprendas CSS
                  mientras aprendas otras tecnologias como por ejemplo HTML.
                  Durante esta parte de tu viaje, debes concentrarse en aprender
                  lo suficiente como para diseñar una pagina web. Obviamente no
                  se necesita un conocimiento profundo de CSS en este paso, pero
                  debes ser capaz de defenderte. A medida que avanza tu viaje,
                  tus habilidades de CSS mejoraran gradualmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="card mb-3" style="max-width: 1000px">
          <div class="row g-0">
            <div class="col-md-4">
              <img style="height: 100%" src="../assets/JS.gif" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">JAVASCRIPT</h4>
                <p class="card-text">
                  Debes dominar JavaScript / TypeScript, ya que es el lenguaje
                  del presente y el futuro de la Web. JavaScript es el lenguaje
                  que existe ahora en la interfaz y es el que necesitas para
                  poder manejarlo perfectamente. JavaScript es un lenguaje que
                  nació con la intención de convertirse en un lenguaje de
                  secuencias de comandos, sin embargo, hoy en día es un lenguaje
                  que intenta abarcar múltiples paradigmas. La evolución real de
                  este lenguaje ha llegado en los últimos 5 años desde que su
                  expansión ha sido masiva. Es por eso que JavaScript debe
                  estudiarse en profundidad: puedes crear aplicaciones de
                  escritorio, móviles, backend y frontend.
                </p>
              </div>
            </div>
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
      titulo: "Como empezar en el desarrollo web?",
    };
  },
};
</script>

<style>
img {
  width: 120%;
  object-fit: cover;
}
</style>