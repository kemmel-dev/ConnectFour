<template>
  <div id="header">
      <div id="logo">
        <h1>logo</h1>
      </div>
      <div id="title">
        <div id="title1">
          <h1>Title1</h1>
        </div>
        <div id="title2">
          <h2>Title2</h2>
        </div>
      </div>
      <div id="subtitle">
        <h3> Subtitle </h3>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header.vue'
}
</script>

<style scoped>
  h1, h2, h3 {
    color: white;
  }

  #header {
    width: 100%;
    height: 125px;
  }
  #header div {
    display: inline-block;
  }
  #header div div {
    display:inline;
  }
  #logo
  {
    background: black;
    width: 10%;
    height: 100%;
  }
  #title
  {
    background: red;
    width: 45%;
    height: 100%;
  }
  #subtitle
  {
    background: blue;
    width: 45%;
    height: 100%;
  }
</style>
