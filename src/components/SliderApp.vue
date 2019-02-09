<template>
    <div class="slider">
        <div id="banners">
            <div class="slide">
                <div class="image" style="background-image:url(http://bgwall.net/wp-content/uploads/2014/09/Dandelion-Flower-Wallpaper-Full-HD.jpg)"></div>
                <div class="info">
                    <div class="title">New Product</div>
                    <div class="text">The new Collection of Summer</div>
                </div>
            </div>
            <div class="slide">
                <div class="image" style="background-image:url(http://bgwall.net/wp-content/uploads/2014/09/Dandelion-Flower-Wallpaper-Full-HD.jpg)"></div>
                <div class="info">
                    <div class="title">New Product2</div>
                    <div class="text">The new Collection of Summer</div>
                </div>
            </div>
            <div class="slide">
                <div class="image" style="background-image:url(http://bgwall.net/wp-content/uploads/2014/09/Dandelion-Flower-Wallpaper-Full-HD.jpg)"></div>
                <div class="info">
                    <div class="title">New Product3</div>
                    <div class="text">The new Collection of Summer</div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { tns } from "tiny-slider/src/tiny-slider.module.js";

export default {
    mounted() {
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
    }
}
</script>

<style lang="less">

    @import '../less/base.less';

    .slider{
        width: 100%;
        height: 250px; 
        position: relative;
        margin-bottom: 80px;
        overflow: hidden;
        .slide{
            width: 100%;
            height: 250px;
            position: relative;
            display: flex;
            align-items: center;
            .image{
                .img;
                width:100%;
                height: 100%;
                position: absolute;
                top:0;
                left:0;
            }
            .info{
                position:absolute;
                z-index: 1;
                left: 180px;
                border: 3px solid #fff;
                width: 350px;
                padding: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                box-sizing: border-box;
                top:50px;
                .screen(@s480 , @s960 , {left: 0 ; right:0; margin:0 auto;});
                .screen(2px , @s480 , {left: 0 ; right:0;width: 290px; margin:0 auto;});
                .title{
                    font-family: @font3;
                    color:#fff;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .text{
                    font-family: @font1;
                    font-size: 30px;    
                    line-height: 36px;
                    text-align: center;
                    color: #fff;
                }
            }
        }
    }
    .tns-controls{
        display: none;
    }
    button[data-action="stop"] , button[data-action="start"]{
        display: none;
    }
    .tns-nav{
        position: absolute;
        top:0;
        bottom:0;
        right:140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
        margin: auto 0;
        .screen(2px , @s960 , {
            right: 40px;
        });
        button{
            padding: 0;
            margin:6px 0;
            height:8px;
            width:8px;
            border:none;
            border-radius:8px;
            background-color: rgba(255, 255, 255, 0.5);
            transition: 0.3s;
            &.tns-nav-active{
                background-color: #fff;
            }
        }
    }
</style>
