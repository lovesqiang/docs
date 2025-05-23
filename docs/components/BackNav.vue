<script setup>
import NavBox from '/components/NavBox.vue'
import page1Data from '/data/back-links.json'
</script>

<template>
  <NavBox :categories="page1Data.categories" />
</template>