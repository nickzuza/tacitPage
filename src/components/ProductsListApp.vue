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
import Product from './ProductApp'
import products from '../utils/products';

export default {
    name: "products-list",
    introduction: "Lista produselor pe pagina",
    description:`
    Componenta data are rolul de a ne afisa produsele pe pagina, si de a transmite in componentele produselor 
    functionalul de adaugare si stergere a produselor di card
    `,
    token: `
            <products-list 
            :items="items"
            v-on:add-item-to-cart="inCartAdd"
            v-on:remove-itm-from-cart="removeItem"
            v-on:change-itm-qty="changeItmQty">
        </products-list>
    `,
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

<style lang="less">
    @import '../less/base.less';

    .prods__products {
        width: ~'calc( (((100% - 320px) / 3)) *  2 + 305px )';
        min-height: 200px;
        padding-top:10px;
        padding-left: 15px;
        overflow-x: hidden;
        .screen(@s960 , @s1280 , {
            width: ~'calc((100% / 3) * 2 - 35px)';
            padding: 0;
        });
        .screen(2px, @s960 , {width: 100%;padding: 10px 0;});
        &__wrap{
            width:  ~'calc(100% + 15px)';
            margin-right: -15px;
            display: flex;
            flex-wrap: wrap; 
            .screen(2px , @s960 , {margin-right: 0;width: 100%; });
               
        }

    }
</style>
