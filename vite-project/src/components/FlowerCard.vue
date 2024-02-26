<template>
    <div>
    <div id="flower-card">
         <h2>{{ Flower.name }}</h2>
        <img :src="Flower.img" alt=""/>
      
        <button @click="pickMe">
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
const picker = ref(false);


function pickMe() {

//switch true to false etc
    picker.value =! picker.value

//change the Flower prop to match
   if (picker.value === true) {
    props.Flower.picked = true
   } else if (picker.value === false){
    props.Flower.picked = false
   }

   console.log(props.Flower.picked)
}
</script>

<style scoped>
img{
    width: 300px;
    height: 350px;
    object-fit: cover;
}</style>