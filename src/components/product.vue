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
                <input type="number" v-model="item.qty">
                <button v-on:click="change(-1)">-</button>
                </div>
                <button class="toCard" v-if="!item.inCart" v-on:click="addToCard">+ Add To Card</button>
                <button class="toCard del" v-if="item.inCart" v-on:click="removeFromCard">- Remove item</button>
            </div>
    </div>
</template>
<script>
export default {
  methods: {
     change(num) {
         this.$emit('change-qty', { id: this.item.id, qty:num });
     },

     addToCard() {
         this.$emit('add-to-card', this.item.id);
     },

     removeFromCard() {
         this.$emit('remove-from-cart', this.item.id);
     }
  },
  props:['item']
}
</script>

