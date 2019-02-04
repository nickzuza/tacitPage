<template>
    <div class="prods__filters">
        <div class="prods__filters__item">
            <div class="prods__filters__item__title">
                Categories
                <button class="close">+</button>
            </div>
            <div class="prods__filters__item__opts1">
                <ul>
                    <li><span>Lifestyle</span><span>01</span></li>
                    <li><span>Running</span><span>15</span></li>
                    <li><span>Training & Gym</span><span>20</span></li>
                    <li><span>Clothing</span><span>25</span></li>
                    <li><span>Scarves</span><span>30</span></li>
                    <li><span>Accessories</span><span>35</span></li>
                </ul>
            </div>
        </div>
        <div class="prods__filters__item">
            <div class="prods__filters__item__title">
                Size
                <button class="close">+</button>
            </div>
            <div class="prods__filters__item__opts2">
                <ul>
                    <li>s</li>
                    <li>m</li>
                    <li>l</li>
                    <li>xl</li>
                </ul>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    data() {
        return({})
    },
    mounted() {
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
        for(let i=0; i < categs.length; i++) {
            categs[i].addEventListener('click',() => {
                if(document.querySelector('.prods__filters__item__opts1 ul li.active')) {
                    document.querySelector('.prods__filters__item__opts1 ul li.active').classList.remove('active');
                }
                categs[i].classList.contains('active') ?
                categs[i].classList.remove('active') :
                categs[i].classList.add('active');
            });
        }
    }
}
</script>

