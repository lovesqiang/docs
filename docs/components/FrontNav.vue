<script setup>
import NavBox from '/components/NavBox.vue'
import pageData from '/data/front-links.json'
</script>

<template>
  <NavBox :categories="pageData.categories" />
</template>