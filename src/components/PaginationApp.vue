<template>
    <div class="pagination">
        <button class="prev"></button>
        <ul class="pags">
            <li class="active"><button>01</button></li>
            <li><button>02</button></li>
            <li><button>03</button></li>
            <li><button>04</button></li>
            <li><button>05</button></li>
        </ul>
        <button class="next"></button>
    </div>
</template>

<script>
export default {
    deta() {return({})}
}
</script>

<style lang="less" scoped>
    @import '../less/base.less';

    .pagination{
        .container;
        border: 1px solid #d5d5d6;
        height: 80px;
        display: flex;
        margin-bottom: 50px!important;
        button{
            height: 80px;
            width: 80px;
            background:transparent;
            color:#000;
            border: 1px solid #d5d5d6;
            border-top:none;
            border-bottom:none;
            font-family: @font3;
            font-weight: 700;
            position: relative;
            &.prev:after , &.next:after{
                width: 9px;
                height: 9px;
                border-right: 2px solid #000;
                border-bottom:2px solid #000;
                display: block;
                position: absolute;
                content: '';
                left:0;
                right: 0;
                top:0;
                bottom: 0;
                margin:auto;
            }
            &.prev{
                border-left: none;
                &:after{
                    transform: rotate(135deg);     
                }
            }
            &.next{
                border-right: none;
                &:after{
                    transform: rotate(-45deg);     
                }
            }
            
        }
        ul{
            display: flex;
            width: ~'calc(100% - 160px)';
            justify-content: center;
            margin-left: 1px;
            li{
                &.active{
                    button{
                        color: #fff;
                        background-color:@blue1;
                    }          
                }
                margin-left: -1px;
            }
        } 
    }
</style>

