<template>
    <div class="banner-block">
        <div class="banner1" style="background-image:url(img/banner1.png)">
            <div class="cat">
                lifestyle
            </div>
            <div class="subCat">
                New Now: Striped cotton
            </div>
            <button class="more">More Info</button>
        </div>
        <div class="banner2" style="background-image:url(img/banner2.png)">
            <div class="cat">
                lifestyle
            </div>
            <div class="subCat">
                Fashion Collecttion
            </div>
            <button class="more">More Info</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "banners-app",
    introduction: "Componenta ce contine bannerele paginii",
    description:`Aceasta componenta prezinta bannerele in cadrul paginii, care la numar sunt 2`,
    token: `<banners-app></banners-app>`,
}
</script>

<style lang="less" scoped>
    @import '../less/base.less';

    .banner-block{
        .container;
        height: 320px;
        background: #eee;
        margin-top: -90px!important;
        display: flex;
        .screen(2px , @s960 , {
            height: 270px;
        });
        .banner1 , .banner2{
            height: 100%;
            .img;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            .cat{
                text-transform: uppercase;
                font-weight: 700;
                font-family: @font3;
                margin-bottom:23px;
                font-size: 14px;
            }
            .subCat{ 
                font-size: 30px;
                font-weight: 700;
                font-family: @font1;
                margin-bottom:35px;
                max-width: 350px;
                line-height: 1;
                text-transform:capitalize;
            }
            .more{
                padding: 0 44px;
                border: none;
                height: 40px;
                border-radius:40px;
                background-color: #fff;
                font-family: @font3;
                color:#c9b4a3;
                cursor: pointer;
                font-size: 14px;
                box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
                transition: 0.3s;
                &:hover{
                    background-color: transparent;
                    color:#fff;
                    box-shadow: none;
                }
            }
        }
        .banner1{
            padding-left: 82px;
            width: 70%;
            box-sizing: border-box;
            align-items: flex-start;
            .screen( @s960 , @s1280, {
                width: ~'calc(100% - 320px)';
            });
            .screen(2px , @s960 , {display: none});
        }
        .banner2{
            box-sizing: border-box;
            width: 30%;
            align-items:flex-start;
            padding: 0 30px 0 185px;
            .screen( 2px , @s1280, {
                background-position: left;
                width: 320px;
                padding:20px 30px;
                align-items: center;
                justify-content: center;
            });
            .screen(2px , @s960 , {
                width: 100%;
                background-size: 100% 270px;
            });
        }
}
</style>
