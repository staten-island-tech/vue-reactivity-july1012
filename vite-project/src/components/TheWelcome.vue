<template>
  <div>
    <h1 v-if="answer">correct</h1>
    <h1 v-else>incorrect</h1>
    <h2 v-for="animal in animals" :key="animal">{{ animal }}</h2>

  </div>
</template>

<script setup>
const answer = true;
const animals = ["ape", "baboon", "elk", "Joe Mama"]
</script>

<style scoped>
h1{
  background-color: red;
}</style>