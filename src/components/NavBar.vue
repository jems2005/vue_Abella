<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white px-4">
    <router-link class="navbar-brand fw-bold d-flex align-items-center" to="/">
      <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="Book Icon" width="30" class="me-2" />
      Abella's Books
    </router-link>

    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/books">My Books</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
