<template>
  <q-page>
    <h2>Netscape și JavaScript</h2>

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <img alt="JavaScript"  style="width: 50%;display:block;margin:auto;" src="~assets/javascript_logo.png" />
      </div>
      <div class="col-12 col-md-0" style="height: 50px">
      </div>
      <div class="col-12 col-md-6">
        <img alt="Netscape"  style="width: 50%;display:block;margin:auto;" src="~assets/Netscape9logo.png" />
      </div>
    </div>
    <div style="margin-top:50px;">
    <p
      class="text-body1"
    >A început să lucreze la Netscape Communications Corporation în aprilie 1995. Brendan Eich s-a alăturat inițial pentru a pune Scheme „în browser”, dar superiorii săi Netscape au insistat că sintaxa limbii seamănă cu cea a Java. Rezultatul a fost un limbaj care avea o mare parte din funcționalitatea Schemei, object-oriented ca Self și sintaxa Java.</p>
    <p
      class="text-body1"
    >Prima versiune a fost completată în zece zile pentru a se adapta programului de lansare Navigator 2.0 Beta, și a fost numită Mocha, dar a fost redenumită LiveScript în septembrie 1995 și mai târziu JavaScript în aceeași lună.</p>
    <p
      class="text-body1"
    >Brendan Eich a continuat să supravegheze dezvoltarea SpiderMonkey, implementarea specifică a JavaScript în Navigator.</p>

    <div class="q-pa-lg flex flex-center">
      <q-btn flat rounded color="primary" to="/tinerete" icon="navigate_before" label="Tinerețe" />
      <q-btn
        flat
        rounded
        color="primary"
        to="/mozilla"
        icon-right="navigate_next"
        label="Proiectul Mozilla"
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
