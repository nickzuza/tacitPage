<template>
    <div class="prods__products">
        <div class="prods__products__wrap">
            <product v-for="(prod , index) in this.items" 
                :key="prod.id"
                :item="prod"
                :ref="'prod'+index"
                v-on:change-qty="changeQty"
                v-on:add-to-card="addItemToCart"
                v-on:remove-from-cart="removeItemFromCart">
            </product>
        </div>
    </div>
</template>

<script>
import Product from './product'
import products from '../utils/products';

export default {
    components: {
        Product
    },
    methods: {
        changeQty(props) {
            this.$emit('change-itm-qty', props);
        },

        removeItemFromCart (id) {
            this.$emit('remove-itm-from-cart', id);
        },

        addItemToCart (id) {
            console.log('test');
            this.$emit('add-item-to-cart', id);
        }

    },

    props: ['items']

}
</script>

