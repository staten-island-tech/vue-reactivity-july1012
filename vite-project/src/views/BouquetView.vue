<template>
  <div class="bouquet">
    <h1>This is your bouquet</h1>

     <PickedCard v-for="bou in bouquet"
    :key="bou.name"
    :Picked="bou"/>
  </div>
</template>

<script setup>
import bouquet from '@/components/FlowerCard.vue';

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
