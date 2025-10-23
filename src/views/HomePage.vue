<template>
  <div class="text-center mt-5">
    <h1 :class="titleClass">Welcome to Book Tracker 📖</h1>
    <p class="lead mt-3">Keep track of every book you’ve read or plan to read.</p>

    <button class="btn btn-secondary mt-3 me-2" @click="toggleHighlight">
      Toggle Highlight
    </button>

    <router-link class="btn btn-primary mt-3" to="/books">Go to My Books</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isHighlighted = ref(false)

const titleClass = computed(() => ({
  'fw-bold text-primary': isHighlighted.value,
  'fw-bold text-dark': !isHighlighted.value
}))

const toggleHighlight = () => {
  isHighlighted.value = !isHighlighted.value
}
</script>

<style scoped>
h1 {
  transition: color 0.3s ease;
}
</style>
