<template>
  <div>
    <h2>Search Results</h2>
    <p>Query: {{ query }}</p>
    <p>Page: {{ page }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const query = route.query.query;
const page = route.query.page;
</script>