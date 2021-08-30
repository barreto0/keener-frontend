<template>
    <div style="min-height: 100vh;">
        <navbar :userName="userName"></navbar>
        <div class="card">
            <div style="padding: 10px;">
                <span class="menu-tab">Produtos</span>
                <span class="menu-tab" style="margin-left: 15px;">Transações</span>
            </div>
            <products-list></products-list>
        </div>
        <custom-footer></custom-footer>
    </div>
</template>

<script>
import Footer from '../shared/ui-components/Footer.vue'
import Navbar from '../shared/ui-components/Navbar.vue'
import ProductsList from '../products/ProductList.vue'

export default {
    components: {
        'custom-footer': Footer,
        'navbar': Navbar,
        'products-list': ProductsList
    },

    data() {
        return {
            userName: '',
            currentTab: 'Produtos'
        }
    },

    created() {
        this.userName = localStorage.getItem('userName');
    },

    methods: {
        
    },
    
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
.card {
  display: flex;
  margin: auto;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: var(--pannelColor);
  height: 800px;
  width: 95%;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
.menu-tab:hover {
    color: var(--accentPurple) !important;
    cursor: pointer;
}

</style>