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
   body {
     position: absolute;
     top: 0; /* Header Height */
     bottom: 0; /* Footer Height */
     margin: 0;
     width: 100%;
   }
</style>
