<template>
    <div  class="item" >
        <div v-if="item.sale" class="sticker">sale</div>
            <div class="img" :style="{'backgroundImage' : 'url('+item.img+')'}" ></div>
            <div class="title" v-text="item.name"></div>
            <div class="prices">
                <div class="old" v-if="item.price.old" ><span class="money" v-text="item.price.old.toFixed(2)"></span></div>
                <div class="new" ><span class="money" v-text="item.price.new.toFixed(2)"></span></div>
            </div>
            <div class="bottom-block">
                <div class="count">
                <button v-on:click="change(1)">+</button>
                <input type="number" v-model="item.qty">
                <button v-on:click="change(-1)">-</button>
                </div>
                <button class="toCard" v-if="!item.inCart" v-on:click="addToCard">+ Add To Card</button>
                <button class="toCard del" v-if="item.inCart" v-on:click="removeFromCard">- Remove item</button>
            </div>
    </div>
</template>
<script>
export default {
  methods: {
     change(num) {
         this.$emit('change-qty', { id: this.item.id, qty:num });
     },

     addToCard() {
         this.$emit('add-to-card', this.item.id);
     },

     removeFromCard() {
         this.$emit('remove-from-cart', this.item.id);
     }
  },
  props:['item']
}
</script>

<style lang="less">
    @import '../less/base.less';

    .list {
        .item{
            .screen( @s960 ,70000px , { 
                flex-direction: row;
                width: ~'calc(100% - 30px)';
                height: 178px;
                align-items: center;
                padding: 18px 27px;
                });
                .img{
                .screen( @s960 ,70000px , {
                    height: 140px;
                    width: 140px;
                });
                }
                .title{
                .screen( @s960 ,70000px , {
                    width: ~'calc(70% - 290px)';
                });
                }
                .prices{
                .screen( @s960 ,70000px , {
                    flex-direction: column;
                    width: auto;
                    min-width: 150px;
                    align-items: flex-start;
                    padding-top: 30px;
                });
                    .new{
                    .screen( @s960 ,70000px , {
                            order:-1;
                    });
                    }
                }
                .bottom-block{
                    .screen( @s960 ,70000px , {
                    padding-top: 30px;
                    width: 30%;
                });
                .count{
                    margin-bottom: 20px;
                }
                .screen(@s960 , @s1280 , {
                    flex-direction: column;

                });
                }
            
        }
    };

    .item {
        transition: 0.6s;
        width: ~'calc((100% / 3 ) - 30px)';
        margin: 15px;
        border: 1px solid #d5d5d6;
        height: 350px;
        box-sizing: border-box;
        padding: 30px 27px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .screen(@s960, @s1280, { width: ~'calc(50% - 30px)';});

        .screen(@s480, @s960, { width: ~'calc(100% - 80px)';margin: 16px 40px;});

        .screen(2px , @s480 , { width:~'calc(100% - 30px)';});
        
        .sticker {
            position: absolute;
            top: 30px;
            right: 27px;
            padding: 5px 12px;
            background: @blue1;
            font-family: @font3;
            font-weight: 700;
            border-radius: 5px;
            font-size: 14px;
            color: #fff;
        }

        .img {
            transition: 0.3s;
            height: 165px;
            width: 100%;
            background-size: contain;
            margin-bottom: 30px;
            background-color: #fff;
        }

        .title {
            transition: 0.3s;
            font-family: @font1;
            font-size: 18px;
            color: #232323;
            margin-bottom: 15px;
            width: 100%;
            
        }

        .prices {
            font-family: @font3;
            font-size: 14px;
            display: flex;
            font-weight: 600;
            width: 100%;
            margin-bottom: 18px;

            .money {

                &:before {
                    content: "$";
                    display: inline-block;
                }

                &:after {
                    content: "USD";
                    margin-left: 5px;
                    display: inline-block;
                }
            }
            .old {
                transition: 0.3s;
                margin-right: 20px;
                color: #999999;
                position: relative;

                &:after {
                    content: '';
                    width: 100%;
                    height: 1px;
                    background: #999;
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                }
            }

            .new {
            transition: 0.3s;
                color: @blue1;
                
            }
        }

        .bottom-block {
        transition: 0.3s;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .count {
                background: #f7f7f7;
                border: 1px solid #d9d9d9;
                font-family: @font3;
                height: 34px;
                border-radius: 34px;
                width: 90px;
                justify-content: center;
                display: flex;
                font-size: 14px;
                font-family: @font3;
                font-weight: 700;

                button {
                    font-size: 14px;
                    font-family: @font3;
                    font-weight: 700;
                    border: none;
                    background: transparent;
                    width: 25px;
                    height: 100%;   
                }

                input {
                    background: transparent;
                    border: none;
                    width: 35px;
                    text-align: center;
                    outline: none;
                    font-weight: 700;
                    font-family: @font3; 
                    &[type=number]::-webkit-inner-spin-button, 
                    &[type=number]::-webkit-outer-spin-button { 
                        -webkit-appearance: none; 
                        margin: 0; 
                    }
                    
                    &[type=number]{
                        -moz-appearance: textfield;
                    }
                }
            }
            .toCard {
                width: 122px;
                height: 34px;
                border-radius: 34px;
                background-color: @blue1;
                color: #fff;
                font-weight: 700;
                font-family: @font3;
                border: none;
                font-size: 12px;
                transition: 0.3s;

                &:hover {
                    background-color: @blue2;
                }

                &.del {
                    background-color: #f44336;

                    &:hover{
                        background-color: #d32f2f;
                    }
                }
            }
        }
    }
</style>
