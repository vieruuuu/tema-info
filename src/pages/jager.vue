<template>
  <q-page>
    <div style="margin-top:50px;">
      <p class="text-body1">
        JägerMonkey, numit intern MethodJIT, a fost un compilator JIT cu o
        metodă completă, conceput pentru a îmbunătăți performanța în cazurile în
        care TraceMonkey nu a putut genera cod nativ stabil. A fost lansat
        pentru prima dată în Firefox 4 și, în cele din urmă, a înlocuit în
        întregime TraceMonkey. În sine a fost înlocuit de IonMonkey.
      </p>

      <p class="text-body1">
        JägerMonkey a funcționat foarte diferit față de alte compilatoare din
        clasa sa: în timp ce compilatoarele tipice au lucrat construind și
        optimizând un grafic al fluxului de control reprezentând funcția,
        JägerMonkey a operat în schimb iterarea liniară înainte prin intermediul
        bytecode SpiderMonkey, reprezentarea funcției interne. Deși acest lucru
        interzice optimizările care necesită reordonarea instrucțiunilor,
        compilarea JägerMonkey are avantajul de a fi foarte rapid, ceea ce este
        util pentru JavaScript, deoarece recompilarea din cauza schimbării
        tipurilor variabile este frecventă.
      </p>
      <p class="text-body1">
        Mozilla a implementat o serie de optimizări critice în JägerMonkey, cel
        mai important în cache-urile liniare polimorfe și inferența de tip.
      </p>
      <p class="text-body1">
        Diferența dintre tehnicile JIT TraceMonkey și JägerMonkey și necesitatea
        ambelor a fost explicată într-un articol hacks.mozilla.org. O explicație
        mai detaliată a detaliilor tehnice a fost oferită de către Chris Leary,
        unul dintre dezvoltatorii SpiderMonkey, într-o postare pe blog. Mai
        multe informații tehnice pot fi găsite în blogurile altor dezvoltatori:
        dvander, dmandelin.
      </p>
    </div>
  </q-page>
</template>
