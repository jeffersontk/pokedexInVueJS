<template>
  <div class="container">
    <Pokedex/>
     <img src="@/assets/dobra.svg" alt="dobra">
    <PokedexFlip/>
  </div>
</template>
<style>
  .container{
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
</style>
<script>
// @ is an alias to /src
import Pokedex from '@/components/pokedex.vue'
import PokedexFlip from '@/components/pokedexFlip.vue'


export default {
  name: 'Home',
  components: {
    Pokedex,
    PokedexFlip,
  }
}
</script>
