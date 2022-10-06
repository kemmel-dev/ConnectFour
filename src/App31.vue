<template>
  <Header></Header>
  <NavBar></NavBar>
  <Welcome></Welcome>
</template>

<script>
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import NavBar from '@/components/NavBar'

export default {
  name: 'App31',
  components: {
    Header,
    Welcome,
    NavBar
  }

}
</script>

<style>
  @import "@/assets/style.css";
</style>
