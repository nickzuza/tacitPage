<template>
    <div  class="item" >
        <div v-if="item.sale" class="sticker">sale</div>
            <div class="img" :style="{'backgroundImage' : 'url('+item.img+')'}" ></div>
            <div class="title" v-text="item.name"></div>
            <div class="prices">
                <div class="old" v-if="item.price.old" ><span class="money" v-text="item.price.old.toFixed(2)"></span></div>
                <div class="new" ><span class="money" v-text="item.price.new.toFixed(2)"></span></div>
            </div>
            <div class="bottom-block">
                <div class="count">
                <button v-on:click="change(1)">+</button>
                <input type="number" v-model="nrItems">
                <button v-on:click="change(-1)">-</button>
                </div>
                <button class="toCard" v-on:click="addToCard">+ Add To Card</button>
            </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          nrItems:0
      }
  },
  methods:{
      change(num){
          if(this.nrItems + num < 99 && (this.nrItems + num ) >= 0){
                this.nrItems += num;
          }
      },
      addToCard(){
        this.$emit('changed');
      }
       

  },
  props:['item'],
}
</script>

