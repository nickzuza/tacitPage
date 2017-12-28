'use Strict';
import Vue from 'vue'
import Multiselect from 'vue-multiselect';
import Product from './product';
import { tns } from "tiny-slider/src/tiny-slider.module.js"
window.Velocity = require('velocity-animate');
window.page = new Vue({
  el:'#app',
  data:{
    items:window.prods,
    inCartItms:{
      count:0,
      items:[]
    },
    sortBy:{
      opts:[
        {id:0,name:"Price $ - $$"},
        {id:1,name:"Name A - Z"},
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
  methods:{
    inCartAdd(item){
      this.inCartItms.items.push(item);
      this.inCartItmsCount();  
    },
    inCartItmsCount(){
      this.inCartItms.count = 0;
      for(let i = 0 ; i < this.inCartItms.items.length;i++){
        this.inCartItms.count += this.inCartItms.items[i].quant;
      }   
    },
    removeItem(id){
      for(let i = 0 ; i < this.inCartItms.items.length;i++){
        if(this.inCartItms.items[i].id === id){
           let itmsText= this.inCartItms.items[i].quant >1 ? 'items':'item';
           alert('removed from cart  '+ this.inCartItms.items[i].quant +' '+itmsText);
          this.inCartItms.items.splice(i, 1);
        }
      }
      this.inCartItmsCount(); 

    }

  },
  components:{
    Multiselect,Product
  },
  mounted(){
    this.sortBy.val = this.sortBy.opts[0];
  }
});
window.addEventListener('load',()=>{
  window.slider = tns({
    disabled:true,
    container: '#banners',

    responsive:{
      2:{
        disabled:true
      },
      960:{
        disabled:false,   
        slideBy: 1,
        autoplay: true,
        nav:true,
        disabled:false,
      }
    }
  });
  document.getElementById('gridView').addEventListener('click',function(e){
    let el = e.currentTarget;
    let listButt = document.getElementById('listView');
    listButt.classList.contains('active') ? listButt.classList.remove('active') : null ;
    el.classList.add('active');
    let prodBlock = document.querySelector('.prods__products__wrap');
    prodBlock.classList.contains('list')? prodBlock.classList.remove('list'): null;
  });

  document.getElementById('listView').addEventListener('click',function(e){
    let el = e.currentTarget;
    let gridButt = document.getElementById('gridView');
    gridButt.classList.contains('active') ? gridButt.classList.remove('active') : null ;
    el.classList.add('active');
    document.querySelector('.prods__products__wrap').classList.add('list');

  });

  
  let filterTitles=document.querySelectorAll('.prods__filters__item__title');

  for(let i =0 ; i < filterTitles.length; i ++){
    let filter = filterTitles[i].closest('.prods__filters__item');
    filterTitles[i].addEventListener('click' , ()=>{
      if(window.innerWidth> 960){
        if(!filter.classList.contains('opened')){
          filter.classList.add('opened');
          Velocity(filter.querySelector('.prods__filters__item__opts1 , .prods__filters__item__opts2') , 'slideDown' , {  duration: 300 })
        };
      }
    });
  }
  
  let closeFil = document.querySelectorAll('.prods__filters__item__title .close');

  for(let i= 0 ; i < closeFil.length; i ++){
    let filter = closeFil[i].closest('.prods__filters__item');
    closeFil[i].addEventListener('click', (e)=>{
      e.stopPropagation();
      filter.classList.remove('opened');
      Velocity(filter.querySelector('.prods__filters__item__opts1 , .prods__filters__item__opts2') , 'slideUp' , {  duration: 300 });
    });
  }

  let sizes = document.querySelectorAll('.prods__filters__item__opts2 ul li');

  for(let i=0; i<sizes.length; i++){
    sizes[i].addEventListener('click',()=>{
      if(document.querySelector('.prods__filters__item__opts2 ul li.active')){
        document.querySelector('.prods__filters__item__opts2 ul li.active').classList.remove('active');
      }
      sizes[i].classList.contains('active')?sizes[i].classList.remove('active') :sizes[i].classList.add('active');
    });
  }


  let categs = document.querySelectorAll('.prods__filters__item__opts1 ul li');
  for(let i=0; i < categs.length; i++){
    categs[i].addEventListener('click',()=>{
      if(document.querySelector('.prods__filters__item__opts1 ul li.active')){
        document.querySelector('.prods__filters__item__opts1 ul li.active').classList.remove('active');
      }
      categs[i].classList.contains('active')?categs[i].classList.remove('active') :categs[i].classList.add('active');
    });
  }

  document.getElementsByClassName('mobMenu')[0].addEventListener('click' , ()=>{
    Velocity(document.getElementsByClassName('navigation')[0] , {left:0} );
    document.getElementsByTagName('body')[0].classList.add('scr-no');
  });

  document.getElementsByClassName('closeMen')[0].addEventListener('click' , ()=>{
    Velocity(document.getElementsByClassName('navigation')[0] , {left:'-100vw'} );
    document.getElementsByTagName('body')[0].classList.remove('scr-no');
  });

  document.getElementById('mobFilters').addEventListener('click',()=>{
    if(window.innerWidth < 960){
      let flBlock=document.getElementsByClassName('prods__filters')[0];
       let bodies = document.querySelectorAll('body , html');

      if(flBlock.style.display !== 'block'){
        Velocity(flBlock , 'slideDown' );
        document.getElementById('mobFilters').classList.add('opened');
        let body = document.querySelector('body');
        Velocity(body , 'scroll' , {offset :document.querySelector('.top-pan').offsetTop +'px'})
        .then(
          function(elements) {  
            console.log(elements);
            document.getElementsByTagName('body')[0].classList.add('scr-no');
          });
      }else{
        Velocity( flBlock, 'slideUp');
        document.getElementById('mobFilters').classList.remove('opened');
        setTimeout( function(){
          document.getElementsByTagName('body')[0].classList.remove('scr-no');
        } , 300);
      }
    }
  });
});

window.addEventListener('resize',()=>{
  if(window.innerWidth > 960 ){
    document.getElementsByTagName('body')[0].classList.remove('scr-no');
  }else{
    if( document.getElementById('mobFilters').classList.contains('opened')){
      document.getElementsByTagName('body')[0].classList.add('scr-no');
    }
  }
  
 });
//()