<template>
    <div style="min-height: 100vh;">
        <navbar></navbar>
        <div class="card fadeIn first">
            <div style="padding: 10px;">
                <!-- <span class="menu-tab" id="Produtos" @click="switchTabs('Produtos')">Produtos</span>
                <span class="menu-tab" id="Transações" @click="switchTabs('Transações')">Transações</span> -->

                <span
                v-for="tab in tabs"
                :key="tab.name"
                class="menu-tab"
                :style="{ 'color': tab.color }"
                @click="switchTabs(tab.name)">
                {{ tab.name }}
                </span>

                <products-list v-if="currentTab === 'Produtos'"></products-list>
                <transactions-list v-if="currentTab === 'Transações'"></transactions-list>

                <div v-if="currentTab === 'Produtos'" style="width: 300px; margin-left: auto" class="justify-content-center justify-content-sm-end">
                    <custom-button
                        type="submit"
                        label="Adicionar produto"
                        v-on:buttonActivated="$router.push('/product/new')"
                    ></custom-button>
                </div>

            </div>
        </div>
        <div style="margin-top: 100px;">
            <custom-footer></custom-footer>
        </div>
    </div>
</template>

<script>
import ProductsList from '../products/ProductList.vue'
import TransactionsList from '../transactions/TransactionList.vue'

export default {
    components: {
        'products-list': ProductsList,
        'transactions-list': TransactionsList
    },

    data() {
        return {
            currentTab: 'Produtos',
            tabs: [
                {
                    name: 'Produtos',
                    color: 'var(--accentPurple)'
                },
                {
                    name: 'Transações',
                    color: 'white',
                },
            ],

        }
    },

    methods: {
        switchTabs (tabName) {
            this.currentTab = tabName
            this.tabs.forEach(element => {
                if (element.name === tabName) {
                    element.color = 'var(--accentPurple)'
                } else {
                    element.color = 'white'
                }
            });
        }
    }

    
}
</script>
<style scoped>
.greeting {
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 35px;
  margin-bottom: 0;
}
.menu-tab{
    font-size: 25px;
    font-weight: 900;
    margin-left: 15px;
}
.menu-tab:hover {
    color: var(--accentPurple) !important;
    cursor: pointer;
}

</style>