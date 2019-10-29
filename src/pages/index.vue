<template>
  <q-page class="bg-primary text-white">
    <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);">
      <div style="text-align: center" class="q-pa-md">
        <p class="text-h2">Brendan Eich</p>
        <p class="text-subtitle1">website realizat de</p>
        <p class="text-h4">Vieru Andrei</p>
        <br />
        <p
          class="text-body1"
        >Website creat folosind Quasar, un framework JavaScript pentru realizarea interfețelor grafice utilizând Vue.js.</p>
        <p class="text-body1">Website-ul este de tip SPA (single page aplication), rescrie pagina curentă, în loc să încarce pagini noi de pe server.</p>
        <p class="text-body1">Codul sursă este disponibil pe Github.</p>
      </div>

      <div style="display: flex;justify-content: center;">
        <q-btn rounded outline color="white" to="/introducere" label="Introducere" />
      </div>

      <br />

      <div style="text-align: center" class="q-pa-md">
        <p class="text-h4">Resurse</p>
      </div>

      <div style="display: flex;justify-content: center;" class="q-pa-md q-gutter-sm">
        <q-btn
          type="a"
          href="https://github.com/vieruuuu/tema-info"
          target="_blank"
          rounded
          outline
          color="white"
          label="Github"
        />
        <q-btn
          type="a"
          href="https://quasar.dev"
          target="_blank"
          rounded
          outline
          color="white"
          label="Quasar"
        />
        <q-btn
          type="a"
          href="https://vuejs.org"
          target="_blank"
          rounded
          outline
          color="white"
          label="Vue.js"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
