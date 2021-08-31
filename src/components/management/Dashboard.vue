<template>
    <div style="min-height: 100vh;">
        <navbar></navbar>
        <div class="card fadeIn first">
            <div style="padding: 10px;">
                <span class="menu-tab">Produtos</span>
                <span class="menu-tab">Transações</span>

                <products-list></products-list>

                <div style="width: 300px; margin-left: auto" class="justify-content-center justify-content-sm-end">
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

export default {
    components: {
        'products-list': ProductsList
    },

    data() {
        return {
            currentTab: 'Produtos'
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