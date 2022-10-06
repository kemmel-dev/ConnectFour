<template>
  <Header></Header>
  <Welcome></Welcome>
</template>

<script>
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'

export default {
  name: 'App31',
  components: {
    Header,
    Welcome
  }

}
</script>

<style>
  @import "src/assets/style.css";
</style>
