<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">📚 My Book List</h2>

    <BookForm @add-book="addBook" />

    <SearchResults @add-book="addBookFromSearch" />

    <BookList
      :books="books"
      @delete-book="deleteBook"
      @toggle-read="toggleRead"
    />
  </div>
</template>

<script>
import { useLocalStorage } from '../composables/useLocalStorage'
import BookList from '../components/BookList.vue'
import BookForm from '../components/BookForm.vue'
import SearchResults from '../components/SearchResults.vue'

export default {
  name: 'BooksView',
  components: { BookList, BookForm, SearchResults },

  setup() {
    const books = useLocalStorage('books', [])

    const addBook = (book) => {
      book.id = Date.now()
      book.isRead = false
      books.value.push(book)
    }

    const addBookFromSearch = (book) => {
      const newBook = {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.join(', ') || 'Unknown',
        isRead: false
      }
      books.value.push(newBook)
    }

    const deleteBook = (id) => {
      books.value = books.value.filter(b => b.id !== id)
    }

    const toggleRead = (id) => {
      const found = books.value.find(b => b.id === id)
      if (found) found.isRead = !found.isRead
    }

    return { books, addBook, addBookFromSearch, deleteBook, toggleRead }
  }
}
</script>

<style scoped>
h2 {
  color: #333;
}
</style>
