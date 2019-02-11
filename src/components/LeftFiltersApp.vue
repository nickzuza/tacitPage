<template>
    <div class="prods__filters">
        <div class="prods__filters__item">
            <div class="prods__filters__item__title">
                Categories
                <button class="close">+</button>
            </div>
            <div class="prods__filters__item__opts1">
                <ul>
                    <li v-for="itm in categories" v-bind:key="itm.name">
                        <span>{{itm.name}}</span><span>{{itm.numb}}</span>
                    </li>
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
                   <li v-for="item in sizes" v-bind:key="item">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    name: "left-filters",
    introduction: "Filtrele verticale de produse",
    description:`Filtrele date sunt organizate drept dropdown-uri, si servesc pentru filtrarea nemijlocita a produselor.
    aceste filtre permit sortarea dupa categorie, si dupa marimea produsului.este realizata doar partea de interactiune cu filtrul, nu si nemijlocti functionalul, fiind necesar suport-ul back-end.
    `,

    token: ` <top-filters :sortByOpts="sortBy" :showOpts="show"></top-filters>`,
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
    },
    props: {
        categories: {
            type: Array,
            note: "categoriile produselor"
        },
        sizes: {
            type: Array,
            note: "merimile produselor"
        }
    }
}
</script>

<style lang="less">
    @import '../less/base.less';

    .prods__filters {
        width: ~'calc((100% - 320px) / 3 )';
        box-sizing: border-box;
        background-color: #fff;
        .screen(@s960 , @s1280 , {width: ~'calc(50% - 160px)';});
        .screen(2px , @s960 , {
            width: 100%;
            display: none;
            position: absolute;
            top:0;
            left:0;
            z-index: 1;
            height: ~'calc(100vh - 75px)';
            overflow: auto;
        });

        &__item{
            width: 100%;
            border-left:1px solid #d5d5d6;
            border-right:1px solid #d5d5d6;
            border-bottom:1px solid #d5d5d6;
            padding:0 13px;
            box-sizing: border-box;
            user-select: none;
            &.opened{
                .prods__filters__item__title{
                    border-bottom: 1px solid #f8f8f8;
                    cursor: default;
                    &:before{
                            transform: rotate(225deg);
                                margin-top: 8px;
                    }
                    .close{
                        transform: rotate(45deg);
                        background: none;
                        border: none;
                        color:#999999;
                        position: absolute;
                        font-size: 27px;
                        right: 15px;
                        top:0;
                        bottom:0;
                        cursor: pointer;
                        visibility: visible;
                        margin:auto 0;
                        opacity: 1;
                        display: block;
                        &:hover{
                            color:@blue1;
                        }
                    }
                }
            }
            &__title{
                border-bottom: 1px solid transparent;
                padding: 25px 15px;
                font-family: @font3;
                font-weight: 700;
                font-size: 14px;
                display: flex;
                position: relative;
                text-transform: uppercase;
                cursor: pointer;
                &:before{
                    content: '';
                    margin-top: 2px;
                    width: 7px;
                    height: 7px;
                    margin-right: 10px;
                    transform: rotate(45deg);
                    border-bottom: 2px solid #000;
                    border-right: 2px solid #000;
                    display: inline-block;
                    transition: 0.3s;
                } 
                .close{
                    visibility: hidden;
                    opacity: 0;
                    .screen(2px, @s960 , {display: none!important});
                } 
            }
            
            &__opts1{
                width: 100%;
                padding: 32px  22px 43px 46px;
                box-sizing: border-box;
                li{
                    display: flex;
                    line-height: 30px;
                    align-items: center;
                    justify-content: space-between;
                    font-family: @font3;
                    font-weight: 400px;
                    font-size: 14px;
                    transition: 0.3s;
                    color: #424242;
                    &.active{
                        color:@blue1;
                    }
                }
            }
            &__opts2{
                padding: 56px 15px 53px 16px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                ul{
                display: flex;
                justify-content: center;
                }
                
                li{
                    &.active{
                        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);      
                    }
                    transition: 0.3s;
                    margin-top: -1px;
                    margin-left: -1px;
                    width: 60px;
                    height: 60px;
                    cursor: pointer;
                    box-sizing: border-box;
                    border:1px solid #d5d5d6;
                    display: flex;
                    align-items: center;
                    justify-content: center; 
                    font-family: @font3;
                    font-weight: 700;
                    color:#000;
                text-transform: uppercase;
                }
            }
            &__opts1 , &__opts2{
                display: none;
                .screen(2px , @s960 , {display:block;});
            }
        }
    }
</style>
