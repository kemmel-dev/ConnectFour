<template>
  <Header></Header>
  <NavBar></NavBar>
  <overview31></overview31>
</template>

<script>
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import NavBar from '@/components/NavBar'
import Overview31 from '@/components/games/Overview31'

export default {
  name: 'App31',
  components: {
    Overview31,
    Header,
    // eslint-disable-next-line vue/no-unused-components
    Welcome,
    NavBar
  }

}
</script>

<style>
  @import "@/assets/style.css";
</style>
