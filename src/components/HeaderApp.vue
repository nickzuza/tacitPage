<template>
    <div class="header">
        <div class="head">
            <div class="container">
                <div class="logo">ModaX</div>
                <nav class="navigation">
                    <button class="closeMen">+</button>
                    <a href="#">home</a>
                    <a href="#">portfolio</a>
                    <a href="#">shop</a>
                    <a href="#">page</a>
                    <a href="#">blog</a>
                    <a href="#">elements</a>
                </nav>
                <div class="searchCart">
                    <button class="chartButt">
                        <div class="butt-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 30 30" width="27px" height="27px" enable-background="new 0 0 30 30" >
                                <g>
                                    <g>
                                        <path d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"/>
                                    </g>
                                </g>
                            </svg>
                            <span class="itmToCart" v-text="totalCart"></span>
                        </div>
                    </button>
                    <button class="searchButt">
                        <div class="butt-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" width="23px" height="23px">
                                <g>
                                    <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
                                </g>
                            </svg>
                        </div>
                    </button>
                    <button class="mobMenu">
                        <div class="butt-inner"><span></span></div>
                        
                    </button>
                </div>
            </div>
        </div>
        <div class="header-title">
            Men’s Lifestyle Clothing
        </div>
        <ul class="bradcrumbs">
            <li class="bradcrumb"><a href="#">Home</a></li>
            <li class="bradcrumb"><a href="#">Catalog</a></li>
            <li class="bradcrumb"><a href="#">Menu</a></li>
            <li class="bradcrumb"><span>Clothing</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "header-app",
    introduction: "Componenta superioara a paginii",
    description:`Componenta data contine 3 parti bine delimintate:
    Pagina superioara, ce contine Logo-ul, Link-urile de navigare a paginii, si butoanele de accesare a 
    cosului si a barei de cautare;
    Sloganul colectiei de moda curenta;
    Componenta Breadcrumbs;
    `,
    token: `<header-app :totalCart=0></header-app>`,
    mounted () {
        document.getElementsByClassName('mobMenu')[0].addEventListener('click' , ()=>{
            Velocity(document.getElementsByClassName('navigation')[0] , {left:0} );
            document.getElementsByTagName('body')[0].classList.add('scr-no');
        });

        document.getElementsByClassName('closeMen')[0].addEventListener('click' , ()=>{
            Velocity(document.getElementsByClassName('navigation')[0] , {left:'-100vw'} );
            document.getElementsByTagName('body')[0].classList.remove('scr-no');
        });
    },

    props: {
        'totalCart': {
            type: Number,
            default: 0,
            note: 'Reprezinta numarul total de elemente ce sunt la moment in cos'

        }
    }
}
</script>

<style lang="less">
    @import '../less/base.less';
    
    .header {
        width: 100%;
        height: 330px;
        background-color: @blue2;
        .screen(2px, @s960, { height: 250px; });
        .head {
            height: 70px;
            background: @blue1;
            width: 100%;
            display: block;
            margin-bottom: 50px;
            .screen(2px, @s960, { margin-bottom: 29px; });
            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                box-sizing:border-box;
                padding: 0 50px;
                .screen(2px, @s480 , { padding: 0 15px; });
                
                .navigation,
                .logo,
                .searchCart {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    color:#fff;
                }
                
                .logo {
                    color:#fff;
                    font-family: @font1;
                    font-weight: 900;
                    font-style: italic;
                    font-size: 24px; 
                }
                
                .navigation {
                    .screen(2px, @s960, { 
                        z-index: 111;
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        left: -100vw;
                        top: 0;
                        background-color: @blue1;
                        flex-direction: column;    
                        justify-content: center;
                    });

                    .closeMen {
                        .screen(@s960 , 70000px , { display: none });
                        font-size: 35px;
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        color: #fff;
                        user-select: none;
                        transform: rotate(45deg);
                        background-color: transparent;
                        border: none;
                    }

                    a {
                        text-decoration: none;
                        color:#fff;
                        text-transform: uppercase;
                        padding: 0 15px;
                        font-family: @font3;
                        font-size: 12px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        
                        .screen(2px , @s960 , {
                            font-size: 16px;
                            height: 50px;
                            font-weight: 700;
                            border:2px solid @blue1;
                            margin: 5px 0;
                            transition: 0.3s;
                        });
                        
                        &:hover{
                          
                            background-color:#fff;
                            color:@blue1;
                            .screen(2px , @s960 , {border-color:@blue1;  outline: 1px solid #fff;});
                        }

                    }
                }
                .searchCart{
                    margin: 0 -20px;
                    .screen(2px , @s480 , {margin:  0 });
                    button{
                        background: transparent;
                        border: none;
                        height: 100%;
                        transition: 0.3s;
                        position: relative;
                        &.mobMenu{
                            .screen(@s960 , 70000px , {display: none});
                            span{
                                display: block;
                                width: 30px;
                                height: 2px;
                                background-color: #fff;
                                position: relative;
                                border-radius:1px 0 0 1px ;
                                &:before , &:after{
                                    width: 24px;
                                    content: '';
                                    height: 2px;
                                    position: absolute;
                                    right:0;
                                    background-color: #fff;
                                }
                                &:before{
                                    top:-10px;
                                    border-radius: 3px 0 0 0;
                                }
                                &:after{
                                    bottom:-10px;
                                    border-radius:0 0 0 3px ;
                                }
                            }
                        }
                        .butt-inner{
                            padding:0 20px;
                            .itmToCart{
                                position: absolute;
                                width: 20px;
                                height: 20px;
                                border-radius:20px;
                                background-color: #fff;
                                color:@blue1;
                                font-size: 10px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                top:36px;
                                left:30px;
                            }
                        }
                        svg{
                            fill:#fff;
                        }
                        &:hover{
                            .screen(@s960 , 70000px , {box-shadow:inset  0 -2px 0 rgba(255, 255, 255, 1);});
                        }
                    }
                }
            }
        }
        &-title{
            font-size: 24px;
            color: #fff;
            width: 100%;
            display: flex;
            justify-content: center;
            font-family: @font3;
            font-weight: 700;
            margin-bottom: 30px;
        }
        .bradcrumbs{
            width: 100%;
            display: flex;
            justify-content: center;
            .screen(2px, @s960 , {
                display: none;
            });
            .bradcrumb{
                position: relative;
                display:flex;
                align-items: center;
                a , span{
                    color:#fff; 
                    font-family: @font3;
                    font-size: 14px;
                }
                &:last-child:after{
                    display: none;
                }
                &:after{
                    content: '▶';
                    margin:0 12px;
                    font-size: 8px;
                    color: #fff;   
                    display: inline-block; 
                   

                }
            }
        }
}
</style>
