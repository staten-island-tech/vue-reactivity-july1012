<template>
  <div class="container">
  <h1 class="header">choose me, love me</h1>
  <div class="cards">
   <div id="flower-card" v-for="Flower in flowers">
         <h2>{{ Flower.name }}</h2>
        <img :src="Flower.img" alt="" />
        <button @click="function(){pickMe(Flower)}" class="btn" >
        <span v-if="Flower.picked">Picked!</span>
        <span v-else>Pick Me</span>
        </button> 
    </div>

   <div id="bouquet-box" v-if="bouquetFull" >
     <h2 class="about">This is your bouquet</h2>
     <div id="picked-card"  v-for="Picked in bouquet">
         <h2>{{ Picked.name }}</h2>
        <img :src="Picked.img" alt=""/>
        <button @click="function(){removeMe(Picked)}" class="btn" >Put Me Back</button> 
      
    </div>
   </div>

   
  </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {reactive} from "vue";

let flowers = [
        {
          name: "✧༺♥༻∞", 
         picked: false,
          price: 1300,
          img: "./blue.JPG",
        },
        {
          name: "𓆩♡𓆪",
            picked: false,
          price: 800,
          img: "/lake.JPG",
        },
        {
          name: "*:･ﾟ✧*:･ﾟ",
            picked: false,
          price: 1200,
          img: "/upsidedown.JPG",
        },
        {
          name: "'*•.¸♡ ♡¸.•*'",
            picked: false,
          price: 900,
          img: "/yellow.jpg",
        },
        {
          name: "˚୨୧⋆｡˚ ⋆",
            picked: false,
          price: 400,
          img: "/pink.JPG",
        },
        {
          name: "₍ ᐢ.ˬ.ᐢ₎˚୨୧",
            picked: false,
          price: 800,
          img: "/tulip.JPG",
        },
        {
          name: "‧̍̊˙˚˙ᵕ꒳ᵕ˙˚˙",
            picked: false,
          price: 800,
          img: "/rose.JPG",
        },
        {
          name: "❥•°❀°•༢",
            picked: false,
          price: 800,
          img: "/purple.JPG",
        },
       
      ]
      
     let bouquet = reactive([])

const bouquetFull = ref(false);

function pickMe(flower) {
if (!bouquet.includes(flower)) {
  bouquet.push(flower)
  flower.picked = true
}
  
  if (bouquet.length >0) {
    bouquetFull.value = true
  } else {
    bouquetFull.value = false
  }

  console.log(bouquetFull)
}
  
  function removeMe(flower){
    const index = bouquet.indexOf(flower)
    bouquet.splice(index, 1)

    flowers.forEach((item)=> {
      if (item.name == flower.name){
        flower.picked = false
      }
    })

    if (bouquet.length >0) {
    bouquetFull.value = true
  } else {
    bouquetFull.value = false
  }
  }
</script>

<style scoped>
.container{
    display:flex;
    flex-wrap: wrap;
    width: 90vw;
    margin:0rem auto;
    justify-content: space-around;
    position:relative;

}
.header, .about{
  display:flex;
  justify-content:space-evenly;
  margin-bottom:20px;
  margin: 50px;
}
.cards, .cardss{
  width:max-content;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 1rem;
  margin-top:0rem;
  margin-bottom: 3rem;
  padding: 2rem;
  position: relative;
  transition:0.7s;
}

img{
    width: 300px;
    height: 350px;
    object-fit: cover;
}

#bouquet-box {
  height: fit-content;
  width: fit-content
}
</style>