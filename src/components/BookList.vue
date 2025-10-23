<template>
  <div>
    <div v-if="books.length === 0" class="text-center text-muted mt-3">
      No books added yet.
    </div>

    <div class="row">
      <div v-for="book in books" :key="book.id" class="col-md-4 mb-3">
        <div
          class="card shadow-sm h-100"
          :class="{ 'border-success': book.isRead }"
        >
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text text-muted">{{ book.author }}</p>

            <div class="mt-auto d-flex justify-content-between">
              <button
                class="btn btn-sm"
                :class="book.isRead ? 'btn-success' : 'btn-outline-success'"
                @click="$emit('toggle-read', book.id)"
              >
                {{ book.isRead ? 'Read' : 'Unread' }}
              </button>

              <button
                class="btn btn-sm btn-outline-danger"
                @click="$emit('delete-book', book.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  emits: ['delete-book', 'toggle-read']
}
</script>

<style scoped>
.card {
  transition: 0.3s;
}
.card:hover {
  transform: scale(1.02);
}
</style>
