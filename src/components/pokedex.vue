<template>
<div>
  <div class="pokedex-content">
  <div class="pokedex-led">
        <ul class="pokevoz">
          <li class="pokevoz-interno"/>
        </ul>
        <ul class="status">
        <li class="pokeStatus1"/>
        <li class="pokeStatus2"/>
        <li class="pokeStatus3"/>
        </ul>
      </div>
    <div class="pokedex-frame">
        <div class="pokedex-bordetela">
            <div class="pokedex-tela"></div>
            <div class="tela-menu">
            <div class="btn-tela"/>
            <div class="box-voz">
              <span class="toggle-voz"></span>
              <span class="toggle-voz"></span>
              <span class="toggle-voz"></span>
            </div>
            </div>
        </div>
      <div class="podekex-form">
        <input v-model="pokename" type="text" class="poke-input" placeholder="Pokemon">
        <button class="btn-search" @click="searchPokemon()">Buscar <span><img class="icon-btn" src="@/assets/pokebola.png" alt="icon"></span> </button>
      </div>
    </div>
    <div class="pokedex-move">
    <div class="circle-btn"></div>
    <div class="btn-group">
        <button class="btn-move-up"><img class="icon-btn-move-top" src="@/assets/up.svg" alt="icon"></button>
      <div>
        <button class="btn-move-left"><img class="icon-btn-move-left" src="@/assets/left.svg" alt="icon"></button>
        <button class="btn-move-right"><img class="icon-btn-move-right" src="@/assets/right.svg" alt="icon"></button>
      </div>
        <button class="btn-move-down"><img class="icon-btn-move-down" src="@/assets/down.svg" alt="icon"></button>
    </div>
    </div>
  </div>
</div>
</template>

<style>
 .pokedex-content{
   width: 320px;
   height: 612px;
   background-image: url('../assets/Pokedex.svg');
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;

  }
   .pokedex-led {
    display: flex;
    justify-content: space-between;
   padding: 25px;
  }
  .pokevoz {
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 0;
    padding: 0;
  }
  .pokevoz-interno {
    background: #0E2757;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #29A9FA, #196A9E);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #29A9FA, #196A9E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 70px;
    height: 70px;
    z-index: 2;
    border-radius: 100%;
    border: solid #0E2757 4px;
    margin: 0 auto;
    --cor-neon: #0E2757;
    animation: neon 1s alternate infinite ease-in-out;
    list-style-type: none;
  }
  .status {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;

  }
  .pokeStatus1 {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #F84753;
    border: solid #0E2757 4px;
    margin-right: 5px;
  }
  .pokeStatus2 {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #f8e960;
    border: solid #0E2757 4px;
    margin-right: 5px;
  }
  .pokeStatus3 {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: #5DE357;
    border: solid #0E2757 4px;
    margin-right: 5px;
  }
  @keyframes neon {
    from {
      filter: drop-shadow(0 0 0 var(--cor-neon));
    }
    to{
      filter: drop-shadow(0 0 5px var(--cor-neon))
    }
  }
  .pokedex-frame{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .pokedex-bordetela {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 260px;
    height: 240px;
    background-color: #fff;
    border-radius: 20px 20px 20px 0px;
    box-shadow:  5px 5px rgba(74, 42, 87, 0.5);
  }
  .pokedex-tela {
    z-index: 13;
    width: 240px;
    height: 180px;
    background-color: #22d6f9;
     border-radius: 8px;
  }
  .tela-menu {
    display: flex;
    width: 230px;
    justify-content: space-between;
    margin-top: 5px;

  }
  .btn-tela {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #F84753;
    border: solid 4px #0E2757;
    box-shadow:  2px 2px rgba(74, 42, 87, 0.5);
  }
  .box-voz{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .toggle-voz{
    width: 80px;
    height: 5px;
    background-color: #0E2757;
    margin-top: 5px;
 border-radius: 10px;
  }
  .podekex-form {
    padding: 10px;
  }
  .poke-input {
    width: 175px;
    border: 0;
    box-shadow:  5px 5px rgba(74, 42, 87, 0.5);
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 4px;
  }
  .icon-btn{
    width: 12px;
    height: 12px;
    margin-left: 3px;
  }
  .btn-search {
    background-color: #fff;
    height: 25px;
    outline: none;
    border-radius: 4px;
    border: 0;
    margin-left: 10px;
    box-shadow:  5px 5px rgba(74, 42, 87, 0.5);
    font-weight: 400;
  }
  .btn-search:hover{
     box-shadow:  5px 5px rgba(74, 42, 87, 0.9);
  }
  .pokedex-move{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 40px;
  }
  .circle-btn{
    width: 50px;
    height: 50px;
    background-color: #00AAF7;
    border-radius: 100%;
    box-shadow:  5px 5px rgba(74, 42, 87, 0.9);
  }
  .btn-group{
    display: flex;
    flex-direction: column;
    width: 100px;
    align-items: center;

  }
  .btn-move-up{
    background-color: #072350;
    border: 0;
    outline: none;
    text-align: center;
    width: 40px;
    border-radius: 4px 4px 0px 0px;
    box-shadow:  4px 4px rgba(74, 42, 87, 0.9);
  }
  .btn-move-down{
    background-color: #072350;
    border: 0;
    outline: none;
    text-align: center;
    width: 40px;
    border-radius: 0px 0px 4px 4px;
    box-shadow:  4px 4px rgba(74, 42, 87, 0.9);
  }
 .btn-move-left{
    background-color: #072350;
    border: 0;
    outline: none;
    text-align: center;
    height: 40px;
    border-radius: 4px 0px 0px 4px;
    box-shadow:  4px 4px rgba(74, 42, 87, 0.9);

  }
  .btn-move-right{
    background-color:#072350;
    border: 0;
    outline: none;
    text-align: center;
     height: 40px;
    border-radius: 0px 4px 4px 0px;
    box-shadow:  4px 4px rgba(74, 42, 87, 0.9);
  }
  .icon-btn-move-down{
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
  .icon-btn-move-top{
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
  .icon-btn-move-left{
    margin-right: 15px;
    margin-top: 5px;
  }
  .icon-btn-move-right{
    margin-left: 15px;
    margin-top: 5px;
  }
</style>

<script>
import axios from 'axios'
/* import getPokemons from '@/plugins/mixins/getPokemons.js' */
export default {
 /*  mixins: [getPokemons], */
  data() {
    return {
      pokename: '',
      pokemons: []
    }
  },
 /*  created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(({data}) => {
      this.pokemons = data.results
    console.log(this.pokemons)
    })
  }, */
  methods: {
    async searchPokemon () {
      console.log(this.pokename);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokename}`)
        this.pokemons = response.data
        console.log(this.pokemons);
      return this.pokemons
    }
  }
}
</script>
