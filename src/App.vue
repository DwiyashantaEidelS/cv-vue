<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- <nav>
      <RouterLink to="/biodata">Biodata</RouterLink>
    </nav>  -->
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  font-size: 1.2rem;
  padding: 1rem;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: blue;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: darkblue;
}
</style> 
