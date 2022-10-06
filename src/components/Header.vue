<template>
  <div class="parent">
    <div class="item container" id="logo">
      <div class="center middle">
        <img src="@/assets/logo.png" alt="Connect Four Logo">
      </div>
    </div>
    <div class="item" id="titles">
      <div class="sub-item">
          <h1>Connect Four</h1>
      </div>
      <div class="sub-item">
          <h2>Online demo</h2>
      </div>
    </div>
    <div class="item right" id="subtitle">
      <h2>by Kamiel de Visser</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header.vue'
}
</script>

<style scoped>

h1, h2 {
  margin: 0;
  color:white;
  font-family: fantasy;
  font-weight: bolder;
  -webkit-text-stroke: 1px black;
}

.sub-item {
  margin-top: 10px;
}

.right {
  display: flex;
  justify-content: right;
  margin-top: 10px;
  margin-right: 25px;
}

.parent {
  display: flex;
  height: 110px;
  background-image: url("@/assets/header.png");
  background-size: 110px;
}

img {
  height: 75px;
}

#logo
{
  width: 20%;
}

#titles {
  width:40%
}

#subtitle {
  width:40%
}

.container {
  position: relative;
  height: 110px;
}

.center {
  margin: 0;
  position: absolute;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.middle {
  top: 50%;
  left: 50%;
}

</style>
