<script setup>
import NavBox from '/components/NavBox.vue'
import pageData from '/data/back-links.json'
</script>

<template>
  <NavBox :categories="pageData.categories" />
</template>