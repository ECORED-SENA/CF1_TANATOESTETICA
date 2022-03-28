<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Apreciado aprendiz, la adecuación de un cuerpo sin vida para su traslado final implica el cumplimiento de protocolos de tanatopraxia y normatividad vigente que conlleven a la prestación de un servicio según los requerimientos de los deudos. En este sentido, el presente ambiente de aprendizaje surge ante la necesidad de que usted desarrolle competencias para la verificación del proceso de tanatopraxia y tanatoestética de acuerdo con protocolos establecidos. Lo invitamos a revisar el siguiente recurso de aprendizaje.

    figure.mb-5
      .video
        <iframe width="699" height="393" src="https://www.youtube.com/embed/_GwPIsxbzns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
