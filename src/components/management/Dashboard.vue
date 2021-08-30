<template>
    <div style="min-height: 100vh;">
        <navbar :userName="userName"></navbar>
        <div class="card fadeIn first">
        </div>   
        <custom-footer></custom-footer>
    </div>
</template>

<script>
import Footer from '../shared/ui-components/Footer.vue'
import Navbar from '../shared/ui-components/Navbar.vue'

export default {
    components: {
        'custom-footer': Footer,
        'navbar': Navbar
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
.greeting {
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 35px;
  margin-bottom: 0;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: var(--pannelColor);
  height: 800px;
  width: 95%;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}

</style>