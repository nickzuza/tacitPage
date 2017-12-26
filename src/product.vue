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
                <button class="toCard" v-if="!inBasket" v-on:click="addToCard">+ Add To Card</button>
                <button class="toCard del" v-if="inBasket" v-on:click="removeFromCard">- Remove item</button>
            </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
          nrItems:1,
          inBasket:false
      }
  },
//   watch:{
//       nrItems(newval , oldval){
//           console.log(newval);
//           if(parseInt(newval) > 99 || parseInt(newval) < 0 ){
//               newval = oldval;
//           } 
//       }
//   },
  methods:{
      change(num){
          if(this.nrItems + num < 99 && (this.nrItems + num ) >= 0){
                this.nrItems += num;
          }
      },
      addToCard(){
            if(this.nrItems > 0 && !this.inBasket ){
                 let itm = {}
              itm.id = this.item.id;
              itm.quant = this.nrItems;
              this.$emit('changed',itm);
              this.inBasket = true;
            }else{
                console.log("it's 0 or in cart!");
            }
      },
      removeFromCard(){
          this.nrItems=1;
          this.$emit('remove',this.item.id);
          this.inBasket = false;
      }
     
  },
  props:['item']
}
</script>

