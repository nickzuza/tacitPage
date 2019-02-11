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

                 <div class="section section2">
                    <propdoc :component="bannersComponent" >
                        <template slot="pre-props">
                           Componentul dat nu are props-uri. 
                        </template>
                    </propdoc>
                    <p>Exemplu: </p>
                    <banners-app class="toBottom"></banners-app>
                </div>

                <div class="section">
                    <propdoc :component="topFiltersComponent" >
                        <template slot="pre-props">
                           Props-urile filtrelor sunt array-uri de obiecte. Fiecare obiect trebuie sa aiba structura :<br>
                           <code> 
                                { <br/>
                                id: {id element de tip Number},<br/>
                                name: 'numele optiunii de tip String' <br/>
                                }
                            </code>
                        </template>
                    </propdoc>
                    <p>Exemplu: </p>
                    <top-filters :sortByOpts="mockData.sortBy" :showOpts="mockData.show"></top-filters>
                </div>

                <div class="section">
                    <propdoc :component="leftFiltersComponent" >
                        <template slot="pre-props">
                           Props-urile filtrelor sunt array-uri de obiecte. <br>
                           Fiecare obiect trebuie din array-ul categories trebuie sa aiba structura :<br>
                           <code> 
                                { <br/>
                                numb: {numere produse in categorie - tip Number},<br/>
                                name: 'numele optiunii de tip String' <br/>
                                }
                            </code><br/>
                            Iar pentru array-ul sizes se cere ca fiecare element sa fie un string cu denumirea marimii
                        </template>
                    </propdoc>
                    <p>Exemplu: </p>
                     <left-filters :categories="mockData.categories" :sizes = "mockData.sizes"></left-filters>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import propdoc from 'propdoc';
import headerApp from './HeaderApp';
import bannersApp from './BannersApp';
import topFilters from './TopFiltersApp';
import leftFilters from './LeftFiltersApp';

export default {
    data() {
        return ({
            mockData: {
                totalCart: 0,

                sortBy: [
                    { id: 0, name: "Price $ - $$" },
                    { id: 1, name: "Name A - Z" },
                ],

                show: [
                    { id: 0, qty: 9 },
                    { id: 1, qty: 18 },
                    { id: 2, qty: 36 }
                ],

                categories: [
                    { name: 'Lifestyle', numb: '01'},
                    { name: 'Running', numb: '15'},
                    { name: 'Training & Gym', numb: '20'},
                    { name: 'Clothing', numb: '25'},
                    { name: 'Scarves', numb: '30'},
                    { name: 'Acccesories', numb: '21'},
                ],
                
                sizes: ['s', 'm', 'l', 'xl']
            },

            headerComponent: headerApp,
            bannersComponent: bannersApp,
            topFiltersComponent: topFilters,
            leftFiltersComponent: leftFilters

        });
    },
    components: {
        propdoc,
        headerApp,
        bannersApp,
        topFilters,
        leftFilters
    }
}
</script>

<style lang="less">
    @import '../less/base.less';

    .docs {
        font-family: @font2;
        padding-bottom: 50px;


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
            margin: 0 15px 0;
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
        padding-bottom: 50px;
        border-bottom: 1px solid #eee;
        margin-bottom: 50px;

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

        &2 {
            padding-bottom: 140px;

            .toBottom {
                position: relative;
                top: 90px;
            }
        }
    }
</style>
