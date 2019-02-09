<template>
        <div class="parteners">
        <div class="part" style="background-image:url(http://modular.perfectusinc.com/home/templates/modular/img/other/agency-logo6.png)"></div>
        <div class="part" style="background-image:url(http://buvejam.lv/image/Proizvoditeli/knauf.png)"></div>
        <!-- <div class="part" style="background-image:url(http://martinarismendy.com/wp-content/uploads/2016/11/verde-logo2.png)"></div> -->
        <div class="part" style="background-image:url(http://www.pruebas.co.pe/villatex/images/logo-villatex-main.png)"></div>
    </div>
</template>

<script>
export default {
    data() {
        return({})
    }
}
</script>

<style lang="less" scoped>
    @import '../less/base.less';

    .parteners{
        width: ~'calc(100% - 285px)';
        margin:0 auto 90px;
        display: flex;  
        flex-wrap: wrap;
        .screen(2px , @s960 , {width: 100%;});
        .part{
            .img;
            width:~'calc(25% - 20px)';
            height: 80px;
            background-size:contain;
            margin: 0 10px;
            opacity: 0.3;
            .screen(@s960, @s1280, {
                width:~'calc(50% - 20px)';
                margin: 10px;   
            });
            .screen(2px, @s960 , {width: ~'calc(100% - 20px)';margin: 40px 10px;});
            filter: grayscale(1);
            transition:0.3s;
            &:hover{
                opacity: 1;
            filter: grayscale(0);
            }
        }
    }
</style>
