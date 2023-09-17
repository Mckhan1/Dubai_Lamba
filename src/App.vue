<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderDubai from './components/HeaderDubai.vue'
import './css/style.css'
import './css.css'
import Huracan from './components/Huracan.vue';
import RentCar from './components/RentCar.vue';
import About from './components/About.vue';
import Video from './components/Video.vue';
import Reviews from './components/Reviews.vue';
import Footer from './components/Footer.vue';
</script>

<script>
export default {
  components: {
    HeaderDubai,
    Huracan,
    RentCar,
    About,
    Video,
    Reviews,
    Footer
  }
}
</script>

<template>

  <HeaderDubai />
  <Huracan />
  <RentCar />
  <About />
  <Video />
  <Reviews />
  <Footer />
  <RouterView />
</template>

<style>
</style>
