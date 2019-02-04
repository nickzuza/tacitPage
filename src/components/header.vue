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

    props: ['total-cart']
}
</script>
