<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-show="seVedeHeaderul" reveal elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Brendan Eich
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigare</q-item-label>
        <q-item to="/#">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Introducere</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/tinerete">
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tinerețe</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/netscapesijs">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Netscape și JavaScript</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/mozilla">
          <q-item-section avatar>
            <q-icon name="language" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Proiectul Mozilla</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/brave">
          <q-item-section avatar>
            <q-icon name="work_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Înființarea Brave Software</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/final">
          <q-item-section avatar>
            <q-icon name="done" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Final</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div :style="$route.path !== '/final' ? 'max-width: 1000px;margin: 0 auto;' : 'position: relative;'">
       <div :style="$route.path !== '/final' ? 'margin-left:20px;' : ''">
         <transition
         mode="out-in"
         enter-active-class="animated fadeIn"
         leave-active-class="animated fadeOut"
         >
          <router-view />
         </transition>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: this.$route.path !== '/final',
      macarOData: false,
      seVedeHeaderul: this.$route.path !== '/final'
    }
  },

  watch: {
    '$route.path' (val) {
      if (val === '/final') {
        this.leftDrawerOpen = false
        this.seVedeHeaderul = false
        this.macarOData = false
      } else {
        if (!this.macarOData) {
          setTimeout(() => {
            this.leftDrawerOpen = true
            this.seVedeHeaderul = true
            this.macarOData = true
          }, 200)
        }
      }
    }
  }
}
</script>
