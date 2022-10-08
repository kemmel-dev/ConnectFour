<template>
  <Header></Header>
  <NavBar></NavBar>
  <overview32></overview32>
</template>

<script>
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import NavBar from '@/components/NavBar'
import Overview31 from '@/components/games/Overview31'
import Overview32 from '@/components/games/Overview32'

export default {
  name: 'App31',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Overview31,
    Overview32,
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
