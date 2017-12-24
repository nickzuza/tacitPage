import Vue from 'vue'
import Multiselect from 'vue-multiselect';
import Product from './product';
import { tns } from "tiny-slider/src/tiny-slider.module.js"
window.page = new Vue({
  el:'#app',
  data:{
    items:window.prods,
    sortBy:{
      opts:[
        {id:0,name:"Price $ - $$"},
          {id:1,name:"test1"},
          {id:2,name:"test2"}
      ],
      val:null
    },
    show:{
      opts:[
        {id:0,qty:9},
          {id:1,qty:18},
          {id:2,qty:36}
      ],
      val:null
    }
  },
  methods:{},
  components:{
    Multiselect,Product
  },
  mounted(){
    this.sortBy.val = this.sortBy.opts[0];
    window.slider = tns({
      container: '#banners',
      slideBy: 1,
      autoplay: true,
      nav:true
    })  
  }
})
//()