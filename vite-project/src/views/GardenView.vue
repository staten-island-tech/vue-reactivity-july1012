<template>
  <div class="container">
  <h1 class="header">choose me, love me</h1>
  <div class="cards">
    <FlowerCard class="cards" v-for="flower in flowers" 
    :key="flower.name" 
    :Flower="flower"
    :Picked="flower.picked" />

    <h2 class="about">This is your bouquet</h2>

    <PickedCard class="cards"
    v-for="flower in flowers"
    :key="flower.name"
    :Picked="flower" />
  </div>
  </div>
</template>

<script setup>
import FlowerCard from '@/components/FlowerCard.vue';
import PickedCard from '@/components/PickedCard.vue';

const flowers = [
        {
          name: "✧༺♥༻∞", 
         picked: false,
          price: 1300,
          img: "./imgs/blue.JPG",
        },
        {
          name: "𓆩♡𓆪",
            picked: false,
          price: 800,
          img: "/imgs/lake.JPG",
        },
        {
          name: "*:･ﾟ✧*:･ﾟ",
            picked: false,
          price: 1200,
          img: "/imgs/upsidedown.JPG",
        },
        {
          name: "'*•.¸♡ ♡¸.•*'",
            picked: false,
          price: 900,
          img: "/imgs/yellow.jpg",
        },
        {
          name: "˚୨୧⋆｡˚ ⋆",
            picked: false,
          price: 400,
          img: "/imgs/pink.JPG",
        },
        {
          name: "₍ ᐢ.ˬ.ᐢ₎˚୨୧",
            picked: false,
          price: 800,
          img: "/imgs/tulip.JPG",
        },
        {
          name: "‧̍̊˙˚˙ᵕ꒳ᵕ˙˚˙",
            picked: false,
          price: 800,
          img: "/imgs/rose.JPG",
        },
        {
          name: "❥•°❀°•༢",
            picked: false,
          price: 800,
          img: "/imgs/purple.JPG",
        },
        {
          name: "-ˋˏ ༻❁༺ ˎˊ-",
            picked: false,
          price: 800,
          img: "/imgs/orange.JPG",
        }
      ]
      
  
      
</script>

<style scoped>
.container{
    display:flex;
    flex-wrap: wrap;
    width: 80vw;
    margin:0rem auto;
    justify-content: space-around;

}
.header{
  display:flex;
  justify-content:space-evenly;
}
.cards{
  width:max-content;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  position: relative;
  transition:0.7s;
}
</style>