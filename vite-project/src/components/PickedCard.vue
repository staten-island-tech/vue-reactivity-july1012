<template>
    <div>
    <div id="picked-card" v-if="Picked.picked">
         <h2>{{ Picked.name }}</h2>
        <img :src="Picked.img" alt=""/>
        
      
    </div>
       
    </div>
</template>

<script setup>
// import {ref} from "vue";
const props = defineProps({
    Picked: Object,
});

</script>

<style scoped>
img{
    width: 300px;
    height: 350px;
    object-fit: cover;
}</style>