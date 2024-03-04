<template>
    <div>
    <div id="flower-card">
         <h2>{{ Flower.name }}</h2>
        <img :src="Flower.img" alt="" />
        <button @click="pickMe" class=btn>
        <span v-if="picker">Picked!</span>
        <span v-else>Pick Me</span>
        </button> 

        
    </div>
       
    </div>
</template>


<script setup>

import {ref} from "vue";
const props = defineProps({
    Flower: Object,
});

//clicker logic

</script>

<style scoped>



</style>