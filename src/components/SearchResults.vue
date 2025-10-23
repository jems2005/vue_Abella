<template>
  <div class="search-results container mt-5">
    <h2 class="text-center mb-4">Search Results</h2>

    <div class="d-flex justify-content-center mb-4">
      <input
        v-model="query"
        type="text"
        class="form-control w-50"
        placeholder="Search for a book..."
        @keyup.enter="searchBooks"
      />
      <button class="btn btn-primary ms-2" @click="searchBooks">Search</button>
    </div>

    <div v-if="loading" class="text-center">Searching...</div>

    <div v-else-if="results.length === 0 && searched" class="text-center text-muted">
      No books found.
    </div>

    <div v-else class="row">
      <div
        v-for="book in results"
        :key="book.key"
        class="col-md-4 mb-3"
      >
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">
              <strong>Author:</strong> {{ book.author_name?.[0] || 'Unknown' }}<br />
              <strong>First Published:</strong> {{ book.first_publish_year || 'N/A' }}
            </p>
            <button class="btn btn-success btn-sm" @click="addToList(book)">
              Add to My List
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useLocalStorage } from '../composables/useLocalStorage'

export default {
  name: 'SearchResultsView',
  setup() {
    const query = ref('')
    const results = ref([])
    const loading = ref(false)
    const searched = ref(false)
    const books = useLocalStorage('books', [])

    const searchBooks = async () => {
      if (!query.value.trim()) return
      loading.value = true
      searched.value = true
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${query.value}`)
        const data = await res.json()
        results.value = data.docs.slice(0, 9)
      } catch (err) {
        console.error(err)
      } finally {
        loading.value = false
      }
    }

    const addToList = (book) => {
      const newBook = {
        id: Date.now(),
        title: book.title,
        author: book.author_name?.[0] || 'Unknown',
        isRead: false,
      }
      books.value.push(newBook)
      alert('Book added to your list!')
    }

    return { query, results, loading, searched, searchBooks, addToList }
  }
}
</script>

<style scoped>
.search-results {
  max-width: 900px;
}
</style>
