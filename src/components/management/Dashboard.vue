<template>
    <div>
        <h3>Bem vindo à área de gerenciamento, {{ userName }}</h3>
        <div class="center-in-screen">
            <div class="formCard fadeIn first">
            </div>
                
        </div>
        <custom-footer></custom-footer>

    </div>
</template>

<script>
import Footer from '../shared/ui-components/Footer.vue'

export default {
    components: {
        'custom-footer': Footer,
    },

    data() {
        return {
            userName: '',
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

.formCard {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #1e1e1e;
  height: 500px;
  width: 95%;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}

</style>