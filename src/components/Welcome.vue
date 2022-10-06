<template>
  <div class="parent">
    <div class="div1">
      <div class="container">
        <h2>Pick a date:</h2>
        <input type="date">
        <h2>Pick a team:</h2>
        <ul>
          <li>
            <a href="https://enormous.pizza/">Team Lorem</a>
          </li>
          <li>
            <a href="https://enormous.pizza/">Team Ipsum</a>
          </li>
          <li>
            <a href="https://enormous.pizza/">Team Dolor</a>
          </li>
          <li>
            <a href="https://enormous.pizza/">Team Sit</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="div2">b </div>
    <div class="div3">
      <div>
        <h2>Competition</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome.vue'
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 250px 1fr 350px;
  grid-template-rows: 100%;
  grid-column-gap: 0;
  grid-row-gap: 0;
  height: 100%;
}

.div1 {
  background-color: red; grid-area: 1 / 1 / 2 / 2; }
.div1 div, .div3 div {
  margin-left: 25px;
  margin-right: 10px;
}
.div2 { background-color: green; grid-area: 1 / 2 / 2 / 3; }
.div3 { background-color: blue; grid-area: 1 / 3 / 2 / 4; }

</style>
