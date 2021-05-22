<template>
  <q-page class="bg-primary text-white">
    <div
      style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
    >
      <div style="text-align: center" class="q-pa-md">
        <p class="text-h4">Detalii tehnice</p>
        <br />
        <p class="text-body1">
          Website creat folosind Quasar, un framework JavaScript pentru
          realizarea interfețelor grafice utilizând Vue.js.
        </p>
        <p class="text-body1">
          Website-ul este de tip SPA (single page aplication), rescrie pagina
          curentă, în loc să încarce pagini noi de pe server.
        </p>
        <p class="text-body1">Codul sursă este disponibil pe Github.</p>
      </div>

      <div style="display: flex;justify-content: center;">
        <q-btn rounded outline color="white" to="/#" label="Introducere" />
      </div>

      <br />

      <div style="text-align: center" class="q-pa-md">
        <p class="text-h4">Resurse</p>
      </div>

      <div
        style="display: flex;justify-content: center;"
        class="q-pa-md q-gutter-sm"
      >
        <transition
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="200"
        >
          <q-btn
            :key="btn1"
            @mouseenter="btn1 = 'github.com/vieruuuu/tema-info'"
            @mouseleave="btn1 = 'Github'"
            type="a"
            href="https://github.com/vieruuuu/tema-info"
            target="_blank"
            rounded
            outline
            color="white"
            :label="btn1"
          />
        </transition>

        <transition
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="200"
        >
          <q-btn
            :key="btn2"
            @mouseenter="btn2 = 'quasar.dev'"
            @mouseleave="btn2 = 'Quasar'"
            type="a"
            href="https://quasar.dev"
            target="_blank"
            rounded
            outline
            color="white"
            :label="btn2"
          />
        </transition>
        <transition
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="200"
        >
          <q-btn
            :key="btn3"
            @mouseenter="btn3 = 'vuejs.org'"
            @mouseleave="btn3 = 'Vue.js'"
            type="a"
            href="https://vuejs.org"
            target="_blank"
            rounded
            outline
            color="white"
            :label="btn3"
          />
        </transition>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      btn1: "Github",
      btn2: "Quasar",
      btn3: "Vue.js"
    };
  }
};
</script>
