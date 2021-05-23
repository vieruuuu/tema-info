<template>
  <q-page>
    <div style="margin-top:50px;">
      <p class="text-body1">
        IonMonkey este numele actualului compilator JavaScript JIT de Mozilla,
        care urmărește să permită multe noi optimizări imposibile cu arhitectura
        JägerMonkey anterioară.
      </p>
      <p class="text-body1">
        IonMonkey este un compilator mai tradițional: traduce bytecode
        SpiderMonkey într-un grafic al fluxului de control, folosind formularul
        static de atribuire (SSA) pentru reprezentarea intermediară. Această
        arhitectură permite utilizarea optimizată a JavaScript de la alte
        limbaje de programare pentru JavaScript, incluzând specializarea de tip,
        linia de funcții, alocarea registrului de scanare liniară, eliminarea
        codului mort și mișcarea codului invariant în buclă.
      </p>
      <p class="text-body1">
        Compilatorul poate emite traduceri rapide ale codurilor native ale
        funcțiilor JavaScript pe platformele ARM, x86 și x86-64. Este motorul
        implicit de la Firefox 18.
      </p>
    </div>
  </q-page>
</template>
