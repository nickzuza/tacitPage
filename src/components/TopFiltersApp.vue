<template>
    <div class="top-pan">
        <div class="top-pan__filter">
            <button id="mobFilters">Filter:
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="8px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve">
                    <g>
                        <g id="arrow-drop-down">
                            <polygon points="0,63.75 127.5,191.25 255,63.75   "/>
                        </g>
                    </g>
                </svg>
            </button>
            <button id="clearFilters">
                <div class="butt-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="18px" height="18px" x="0px" y="0px" viewBox="0 0 34.057 34.057" style="enable-background:new 0 0 34.057 34.057;" xml:space="preserve">
                        <g>
                            <g>
                                <path  d="M17.028,32.558c-6.632,0-12.534-4.211-14.688-10.479c-0.16-0.463,0.087-0.969,0.551-1.127    c0.462-0.16,0.968,0.086,1.127,0.551c1.908,5.551,7.137,9.279,13.011,9.279c7.585,0,13.755-6.17,13.755-13.754    c0-0.49,0.398-0.889,0.888-0.889c0.49,0,0.887,0.398,0.887,0.889C32.558,25.591,25.592,32.558,17.028,32.558z"/>
                            </g>
                            <g>
                                <path  d="M2.386,17.916c-0.489,0-0.887-0.396-0.887-0.887c0-8.562,6.967-15.529,15.529-15.529    c6.63,0,12.532,4.209,14.688,10.475c0.159,0.463-0.087,0.969-0.551,1.129c-0.465,0.158-0.969-0.088-1.128-0.551    c-1.909-5.551-7.137-9.279-13.01-9.279c-7.584,0-13.755,6.172-13.755,13.756C3.273,17.519,2.876,17.916,2.386,17.916z"/>
                            </g>
                            <g>
                                <path  d="M30.842,13.332c-0.087,0-0.177-0.014-0.265-0.041l-6.163-1.93    c-0.467-0.147-0.727-0.645-0.581-1.113c0.146-0.467,0.646-0.727,1.111-0.582l5.379,1.686l2.021-5.066    c0.182-0.455,0.699-0.678,1.153-0.494c0.455,0.182,0.678,0.697,0.496,1.152l-2.328,5.83    C31.528,13.117,31.196,13.332,30.842,13.332z"/>
                            </g>
                            <g>
                                <path  d="M0.887,28.332c-0.109,0-0.221-0.021-0.328-0.065c-0.455-0.182-0.677-0.697-0.495-1.152l2.327-5.83    c0.172-0.432,0.646-0.658,1.089-0.518l6.163,1.93c0.468,0.146,0.727,0.644,0.581,1.111c-0.146,0.469-0.645,0.729-1.111,0.582    l-5.378-1.684l-2.023,5.066C1.573,28.119,1.239,28.332,0.887,28.332z"/>
                            </g>
                        </g>
                    </svg>        
                </div>  
            </button>
        </div>
        <div class="top-pan__sortBy">
            <span>sort by:</span>
            <multiselect v-model="sortBy.val" :options="sortByOpts" :searchable="false" :close-on-select="true" :clear-on-select="true" :hide-selected="true" label="name" track-by="name"></multiselect>
        </div>
        <div class="top-pan__qty">
            <span>show:</span>
            <multiselect v-model="show.val" :options="showOpts" :searchable="false" :close-on-select="true" :clear-on-select="true" :hide-selected="true" label="qty" track-by="qty"></multiselect>
        </div>
        <div class="top-pan__view">
            <button id="gridView">
                <div class="butt-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="19px" height="19px">
                        <g>
                            <g>
                                <rect y="190.67" width="160.67" height="130.67"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="190.67" width="130.67" height="160.67"/>
                            </g>
                        </g>
                        <g>
                            <g>
                            <rect x="190.67" y="190.67" width="130.67" height="130.67"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="190.67" y="351.33" width="130.67" height="160.67"/>
                            </g>
                        </g>
                        <g>
                            <g>
                            <path d="M351.333,351.333V512H467c24.813,0,45-20.187,45-45V351.333H351.333z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                            <path d="M45,0C20.187,0,0,20.187,0,45v115.667h160.667V0H45z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                            <path d="M0,351.333V467c0,24.813,20.187,45,45,45h115.667V351.333H0z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="351.33" y="190.67" width="160.67" height="130.67"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M467,0H351.333v160.667H512V45C512,20.187,491.813,0,467,0z"/>
                            </g>
                        </g>
                    </svg>
                </div>  
            </button>
            <button id="listView">
                <div class="butt-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve">
                        <g>
                            <g>
                            <path d="M118.771,200.999H27.406c-7.611,0-14.084,2.664-19.414,7.994C2.663,214.32,0,220.791,0,228.407v54.823    c0,7.61,2.663,14.078,7.992,19.406c5.33,5.329,11.803,7.994,19.414,7.994h91.365c7.611,0,14.084-2.665,19.414-7.994    c5.33-5.328,7.992-11.796,7.992-19.406v-54.823c0-7.616-2.662-14.087-7.992-19.414S126.382,200.999,118.771,200.999z"/>
                            <path d="M118.771,54.814H27.406c-7.611,0-14.084,2.663-19.414,7.993C2.663,68.137,0,74.61,0,82.221v54.821    c0,7.616,2.663,14.091,7.992,19.417c5.33,5.327,11.803,7.994,19.414,7.994h91.365c7.611,0,14.084-2.667,19.414-7.994    s7.992-11.798,7.992-19.414V82.225c0-7.611-2.662-14.084-7.992-19.417C132.855,57.48,126.382,54.814,118.771,54.814z"/>
                            <path d="M118.771,347.177H27.406c-7.611,0-14.084,2.662-19.414,7.994C2.663,360.502,0,366.974,0,374.585v54.826    c0,7.61,2.663,14.086,7.992,19.41c5.33,5.332,11.803,7.991,19.414,7.991h91.365c7.611,0,14.084-2.663,19.414-7.991    c5.33-5.324,7.992-11.8,7.992-19.41v-54.826c0-7.611-2.662-14.083-7.992-19.411S126.382,347.177,118.771,347.177z"/>
                            <path d="M484.215,200.999H210.131c-7.614,0-14.084,2.664-19.414,7.994s-7.992,11.798-7.992,19.414v54.823    c0,7.61,2.662,14.078,7.992,19.406c5.327,5.329,11.8,7.994,19.414,7.994h274.091c7.61,0,14.085-2.665,19.41-7.994    c5.332-5.328,7.994-11.796,7.994-19.406v-54.823c0-7.616-2.662-14.087-7.997-19.414    C498.3,203.663,491.833,200.999,484.215,200.999z"/>
                            <path d="M484.215,347.177H210.131c-7.614,0-14.084,2.662-19.414,7.994c-5.33,5.331-7.992,11.8-7.992,19.41v54.823    c0,7.611,2.662,14.089,7.992,19.417c5.327,5.328,11.8,7.987,19.414,7.987h274.091c7.61,0,14.085-2.662,19.41-7.987    c5.332-5.331,7.994-11.806,7.994-19.417v-54.823c0-7.61-2.662-14.085-7.997-19.41C498.3,349.846,491.833,347.177,484.215,347.177z    "/>
                            <path d="M503.629,62.811c-5.329-5.327-11.797-7.993-19.414-7.993H210.131c-7.614,0-14.084,2.663-19.414,7.993    s-7.992,11.803-7.992,19.414v54.821c0,7.616,2.662,14.083,7.992,19.414c5.327,5.327,11.8,7.994,19.414,7.994h274.091    c7.61,0,14.078-2.667,19.41-7.994s7.994-11.798,7.994-19.414V82.225C511.626,74.613,508.964,68.141,503.629,62.811z"/>
                            </g>
                        </g>
                    </svg> 
                </div>  
            </button>
            <button class="viewAll">
                <div class="butt-inner">
                    view All
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
export default {
    name: "top-filters",
    introduction: "Filtrele orizontale de produse",
    description:`Bara data de filtre predestinata pentru a aranja afisarea produselor dorita de utilizator.In cadrul proiectului dat,
    aceste elemente sunt in mare parte doar mock-uri,fiind necesara si activitatea pe partea de back pentru functionarea acestora.
    Insa elementele drop-down sunt disponibile pentru a demonstras cum vor arata acestea. Deasemenea elementele de schimbare a modului de afisare a produselor tot sunt functionale`,
    token: ` <top-filters :sortByOpts="sortBy" :showOpts="show"></top-filters>`,
    data() {
        return({
            sortBy: {
                val: null
            },
            show: {
                val: null
            }
        })
    },

    mounted() {
        document.getElementById('gridView').addEventListener('click',function(e) {
            let el = e.currentTarget;
            let listButt = document.getElementById('listView');
            listButt.classList.contains('active') ? listButt.classList.remove('active') : null ;
            el.classList.add('active');
            let prodBlock = document.querySelector('.prods__products__wrap');
            prodBlock.classList.contains('list') ? prodBlock.classList.remove('list') : null;
        });

        document.getElementById('listView').addEventListener('click',function(e) {
            let el = e.currentTarget;
            let gridButt = document.getElementById('gridView');
            gridButt.classList.contains('active') ? gridButt.classList.remove('active') : null ;
            el.classList.add('active');
            document.querySelector('.prods__products__wrap').classList.add('list');
        });

        this.sortBy.val = this.sortBy[0];
    },

    props: {
        sortByOpts: {
            type: Array,
            note: 'Optiunile de sortare ce sunt prevazute pentru produse'
        },
        showOpts: {
            type: Array,
            note: 'Optiunile de sortare ce sunt prevazute pentru produse'
        }
    },
    components: {
        Multiselect
    }
}
</script>

<style lang="less">
    @import '../less/base.less';    
    .top-pan{
        border-top:none; 
        width:100%;
        border: 1px solid #d5d5d6;
        border-top: none;
        display: flex;
        box-sizing: border-box;
        position: relative;
        button{
            width: 80px;
            height: 80px;
            background: #fff;
            border: none;     
            svg{
                fill:@blue1;
            }
        }
        .multiselect{
            width: ~'calc(100% - 77px)';
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            z-index: 1;s
            &:after{
                content:'▼';
                right: 40px;
                top: 0;
                bottom: 0;
                font-size: 10px;
                height: 10px;
                margin: auto 0;
                position: absolute;
            }

            &__input{
                height: 80px;
                border: none;
                outline:none;
            }
            &__content{
                width: 100%;
                &-wrapper{
                    position: absolute;
                    width: 100%;
                    left: -1px;
                    top:100%;
                    border: 1px solid #d5d5d6;
                }
            }
            &__element{
                &:hover{
                    background: #eee;
                }
                span{
                    height: 80px;
                    padding: 0 15px;
                    display: flex;
                    align-items: center

                }
                box-sizing: border-box;
                border-bottom:1px solid #d5d5d6;
                width: 100%;
                background-color: #fff;
                &:nth-child(3){
                    border-bottom: none;
                }
            }
        }
        &__filter , &__sortBy , &__qty {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            font-family: @font3;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 14px;
            height: 80px;
            position: relative;
        }
        &__filter{
            width: 25%;
            padding-left:30px; 
            border-right:1px solid #d5d5d6;
            button{
                border-left:1px solid #d5d5d6;
            }
            #mobFilters{
                border-left:none;
                width: 100%!important;
                font-weight: 700;
                text-align: left;
                font-family: @font3;
                font-size: 17px;
                &.opened{
                    .screen(2px , @s960 , {
                        background-color: @blue1;
                        color:#fff;
                        box-shadow: 0 1px 0 @blue1;
                        svg{
                            fill:#fff;
                        }
                    });
                }
                svg{
                    display: none;
                }
                .screen(2px , @s960 , {
                    width: 100%;
                    padding-left: 30px;
                    transition: 0.3s;
                    svg{
                        display: inline-block;
                        position: absolute;
                        right: 25px;
                        top:0;
                        bottom:0;
                        margin:auto 0;
                        fill: #000;
                    }
                
                })
            }
            #clearFilters{
                .screen(2px , @s960 , {display: none});
            }
            .screen(@s960 ,  @s1280 , {display: none});
            .screen(2px , @s960 , {width: ~'calc(100% - 155px)';padding-left: 0;;});
        }
        &__sortBy , &__qty{
            border-right:1px solid #d5d5d6;
            padding: 0 45px;
            .screen(2px , @s960 , {display: none;});
            span{
                margin-right: 10px;
            }
        };
        &__sortBy{
            width: ~'calc(25% + 15px)';
            .screen(@s960 ,  @s1280 , {
                width:~'calc(50% - 160px)';
            });

        }
        &__qty{
            width: ~'calc(25% - 15px)';
            padding: 0 30px;
            .screen(@s960 ,  @s1280 , {
                width:~'calc(50% - 160px)';
            });
        }
        &__view{
            .screen(2px , @s960 , {width: 155px});

            width: 320px;
            height: 80px;
            display: flex;
            .viewAll{
                font-family: @font3;
                font-weight: 700;
                text-transform: uppercase;
                width: 160px;
                color:#fff;
                background-color:@blue1;
                border:none;
                box-shadow: 1px 1px 0 @blue1;
                .screen(2px , @s960 , {width: 155px;display: block!important;})
            }
            button{
                &.active{
                    background-color: @blue1;
                    svg{
                        fill:#fff;
                    }
                }
                transition: 0.3s;
                border-right:1px solid #d5d5d6;
                .screen(2px , @s960 , {display: none;})
            }


        }
    }
</style>
