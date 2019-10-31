<template>
  <q-page>
    <h2>Înființarea Brave Software</h2>
    <div class="justify-center">
      <img alt="Brave"  style="width: 30%;display:block;margin:auto;" src="~assets/brave-logo-svg-vector.svg" />
    </div>
    <div style="margin-top:50px;">
    <p
      class="text-body1"
    >Brendan Eich este CEO-ul Brave Software, o companie de securitate pe Internet, care a strâns 2,5 milioane de dolari pentru finanțarea anticipată de la investitori înger.</p>

    <p
      class="text-body1"
    >Pe 20 ianuarie 2016, compania a lansat versiuni de dezvoltatori ale browserului său web open-source Brave, care bloca reclame și trackere și includea un sistem de microplati pentru a oferi utilizatorilor posibilitatea de a alege între vizualizarea anunțurilor selectate sau plata site-urilor web pentru a nu le afișa.</p>

    <p
      class="text-body1"
    >La Brave Software, Brendan Eich a co-creat Token de atenție de bază (BAT), o criptomoneda proiectată pentru a fi utilizată în browserul Brave. BAT a lansat ICO-ul său la 31 mai 2017 și a strâns 35 de milioane de dolari.</p>

    <div class="q-pa-lg flex flex-center">
      <q-btn
        flat
        rounded
        color="primary"
        to="/mozilla"
        icon="navigate_before"
        label="Proiectul Mozilla"
      />
      <q-btn
        flat
        rounded
        color="primary"
        to="/final"
        icon-right="navigate_next"
        label="Final"
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
