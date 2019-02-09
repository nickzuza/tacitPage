<template>
    <div>
        <header-app :total-cart="totalCartQty"></header-app>
        <banners-app></banners-app>
        <div class="content">
            <top-filters></top-filters>
            <div class="prods">
                <left-filters></left-filters>
                <products-list 
                    :items="items"
                    v-on:add-item-to-cart="inCartAdd"
                    v-on:remove-itm-from-cart="removeItem"
                    v-on:change-itm-qty="changeItmQty">
                </products-list>
            </div>
            <pagination></pagination>
        </div>
        <slider></slider>
        <parteners-app></parteners-app>
        <footer-app></footer-app>
    </div>
</template>
<script>
import headerApp from './HeaderApp';
import bannersApp from './BannersApp';
import partenersApp from './PartenersApp';
import topFilters from './TopFiltersApp';
import leftFilters from './LeftFiltersApp';
import productsList from './ProductsListApp';
import footerApp from './FooterApp';
import products from '../utils/products';
import slider from './SliderApp';
import pagination from './PaginationApp';
import propDoc from 'propdoc';
window.Velocity = require('velocity-animate');

export default {
  name: 'app',

  data: () =>  ({
    items: products,
    sortBy: {
      opts: [
        { id: 0, name: "Price $ - $$" },
        { id: 1, name: "Name A - Z" },
      ],
      val: null
    },
    show: {
      opts: [
        { id: 0, qty: 9 },
        { id: 1, qty: 18 },
        { id: 2, qty: 36 }
      ],
      val: null
    }
  }),

  methods: {
    inCartAdd(id) {
      this.items[id].inCart = true;
    },

    changeItmQty({id, qty}) {
      const itm = this.items[id];
      let num = parseInt(qty);
      if(itm.qty + num < 99 && (itm.qty + num ) >= 0) {
        itm.qty += num;
      }
    },

    removeItem(id) {
      const item = this.items[id];
      alert('removed from cart  ' + item.qty + ' item/s');
      item.inCart = false;
      item.qty = 1;
    }
    
  },

  mounted() {
    this.sortBy.val = this.sortBy.opts[0];
  },

  computed: {
    totalCartQty () {
      let total = 0; 
      const itmsInCart = this.items.filter((item) => item.inCart);
      itmsInCart.map(itm => total += itm.qty);

      return total;
    }
  },

  components: {
    headerApp,
    bannersApp,
    partenersApp,
    footerApp,
    topFilters,
    leftFilters,
    productsList,
    slider,
    pagination,
    propDoc
  }
}
</script>
