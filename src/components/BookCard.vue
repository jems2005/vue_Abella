<template>
  <div class="col-md-4 mb-3">
    <div
      class="card h-100"
      :class="book.isRead ? 'border-success' : 'border-secondary'"
    >
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">
          <strong>Author:</strong> {{ book.author }} <br />
          <strong>Genre:</strong> {{ book.genre || 'N/A' }}
        </p>
        <span
          class="badge"
          :class="book.isRead ? 'bg-success' : 'bg-secondary'"
        >
          {{ book.isRead ? 'Read' : 'Unread' }}
        </span>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <button @click="$emit('toggle-read', book.id)" class="btn btn-sm btn-outline-primary">
          Toggle Read
        </button>
        <button @click="$emit('delete-book', book.id)" class="btn btn-sm btn-outline-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book']
}
</script>
