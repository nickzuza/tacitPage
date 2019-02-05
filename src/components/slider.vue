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
