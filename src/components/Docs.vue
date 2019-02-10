<template>
    <div class="docs__wrapper">
        <div class="docs">
            <div class="docs__header">Documentarea Componentelor</div>
            <div class="docs__body">
                <div class="section">
                    <propdoc :component="headerComponent" >
                        <template slot="pre-props">
                            Props-urile primite de component : 
                        </template>
                    </propdoc>
                    <p>Exemplu: </p>
                    <header-app :total-cart="mockData.totalCart"></header-app>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import propdoc from 'propdoc';
import headerApp from './HeaderApp';

export default {
    data() {
        return ({
            mockData: {
                totalCart: 0
            },
            headerComponent: headerApp
        })
    },
    components: {
        propdoc,
        headerApp 
    }
}
</script>

<style lang="less">
    @import '../less/base.less';

    .docs {
        font-family: @font2;

        &__wrapper {
            background-color: #eee;
        }

        &__header {
            padding: 15px;
            background-color: #5f27cd;
            box-shadow: 0 0 10px #341f97;
            color: #fff;
            font-weight: 400;
            text-transform: capitalize;
            position: relative;
            margin-bottom: 20px;
            font-size: 1.3em;
        }
        &__body {
            margin: 0 15px 25px;
            box-sizing: border-box;
            background-color: #fff;
            padding: 25px;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
            border-radius: 5px;

            .container {
                width: 100%;
            }
            
        }
    }

    .section {
        padding-bottom: 25px;

        h2 {
            font-size: 1.2em;
            color: #341f97;
            font-family: @font2;
            display: inline;

            &::first-letter {
                text-transform: capitalize;
            }

            &:before {
                content: '# <';  
            }

            &:after {
                content: '>';
            }
        }

        h3 {
            padding-left: 18px;
            color:#5f27cd;            
            font-size: 0.8em;
            display: inline;

            &:after {
                content: ']';
            }

            &:before {
                content: '[';
            }
        }

        .description {
            color: #222f3e;
            font-size: 0.8em;
            max-width: 650px;
            margin: 10px 0 15px;
        }

        .token {
            background-color: #222f3e;
            color: #fff;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
        }

        .props {
            display: flex;
            flex-direction: column;
            margin:  10px 0 15px 0;

            .proprow {
                display: flex;
                font-size: 0.7em;

               &.labels {
                   color: #666;

                    div.propcol {
                        box-shadow: inset 1px 0px 0 #e0e0e0;

                        &:first-child {
                            box-shadow: inset 0px 0px 0 #e0e0e0;
                        }
                   }
               }
                .propcol {
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    width: 100%;
                    padding: 10px;
                    box-shadow: inset 1px 1px 0 #e0e0e0;

                    &:first-child {
                         box-shadow: inset 0px 1px 0 #e0e0e0;
                    }
                }
            }
        }

    }
</style>
