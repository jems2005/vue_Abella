<template>
  <form @submit.prevent="submitForm" class="mb-4">
    <div class="row g-2 justify-content-center">
      <div class="col-md-4">
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Book Title"
          required
        />
      </div>
      <div class="col-md-4">
        <input
          v-model="author"
          type="text"
          class="form-control"
          placeholder="Author"
          required
        />
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary w-100">Add Book</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'BookForm',
  emits: ['add-book'],
  setup(_, { emit }) {
    const title = ref('')
    const author = ref('')

    const submitForm = () => {
      if (!title.value || !author.value) return
      emit('add-book', { title: title.value, author: author.value })
      title.value = ''
      author.value = ''
    }

    return { title, author, submitForm }
  }
}
</script>
