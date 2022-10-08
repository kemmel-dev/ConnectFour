<template>
  <Header></Header>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

export default {
  name: 'App31',
  components: {
    Header,
    NavBar
  }

}
</script>

<style>
  @import "@/assets/style.css";
</style>
