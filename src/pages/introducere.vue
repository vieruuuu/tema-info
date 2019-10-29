<template>
  <q-page>
    <h2>Introducere</h2>

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <p
          class="text-body1"
        >Brendan Eich născut la data de 4 Iulie 1961 este un dezvoltator american și creatorul limbajului de programare JavaScript.</p>
        <p
          class="text-body1"
        >Acesta a fost co-fondatorul proiectului Mozilla, fundația Mozilla, și corporația Mozilla.</p>
        <p
          class="text-body1"
        >Acum este directorul executiv al Brave Software, o companie ce a dezvoltat un nou browser ce promite mult mai multă intimitate în mediul online, securitate îmbunătățită și o viteză de navigare cu mult peste cea a competitorilor.</p>
      </div>
      <div class="col-12 col-md-6">
        <img alt="Brendan Eich"  style="width: 50%;display:block;margin:auto;" src="~assets/brendaneich25563.web_.jpg" />
      </div>
    </div>
    <div class="q-pa-lg flex flex-center">
        <q-btn flat rounded color="primary" to="/tinerete" icon-right="navigate_next" label="Tinerețe" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
