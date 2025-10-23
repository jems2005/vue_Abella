<template>
  <div id="app">
    <NavBar />
    <main class="container py-4">
      <router-view />
    </main>
    <FooTer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue'

export default {
  components: { NavBar,FooTer }
}
</script>

<style>
body {
  background-color: #f8f9fa;
  font-family: 'Inter', sans-serif;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  flex: 1;
}
</style>
