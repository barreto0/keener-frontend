<template>
    <div style="padding-top: 25px;">
            <b-navbar class="custom-navbar fadeIn first" toggleable type="dark" variant="dark">
                <b-navbar-nav>
                <b-navbar-brand>Seja bem vindo, {{ userName }}</b-navbar-brand>

                    <b-navbar-toggle target="navbar-toggle-collapse">
                    <template #default="{ expanded }">
                        <b-icon class="icon" v-if="expanded" icon="chevron-bar-up"></b-icon>
                        <b-icon class="icon" v-else icon="chevron-bar-down"></b-icon>
                    </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item><span @click="$router.push('/dashboard')" class="custom-navbar-item">Dashboard</span></b-nav-item>
                        <b-nav-item><span @click="logout()" class="custom-navbar-item">Logout</span></b-nav-item>
                    </b-navbar-nav>
                    </b-collapse>
                </b-navbar-nav>
            </b-navbar>
        </div>
</template>

<script>
export default {
    data() {
        return {
            userName: ''
        }
    },

    created() {
        this.userName = localStorage.getItem('userName');
    },

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.navbar.navbar-dark.bg-dark{
    background-color: var(--pannelColor) !important;
 }
 
.custom-navbar {
    text-align: center;
    justify-content: center;
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    width: 95% !important;
    margin: 0 auto;
    margin-bottom: 10px;
}
.custom-navbar-item:hover {
    color: var(--accentPurple);
}
.icon {
    color: var(--accentPurple);
}
</style>