<template>
    <div>
        <div class="center-in-screen">
            <div class="formCard fadeIn first">
                <div class="cardHeader">
                    <h4>Cadastre-se na plataforma</h4>
                </div>
                <div class="formContent">
                    <b-form>
                        <b-form-group>
                            <label for="input-email">Nome</label>
                            <b-form-input
                            class="inputField"
                            name="Nome"
                            id="input-name"
                            type="text"
                            placeholder="Insira seu nome"
                            v-model="name"
                            v-validate
                            data-vv-rules="required|max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Nome')">{{ errors.first('Nome') }}</span>

                        <b-form-group>
                            <label for="input-email">Email</label>
                            <b-form-input
                            class="inputField"
                            name="Email"
                            id="input-email"
                            type="text"
                            placeholder="Insira seu email"
                            v-model="email"
                            v-validate
                            data-vv-rules="required|email|max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Email')">{{ errors.first('Email') }}</span>

                        <b-form-group>
                            <label for="input-password">Senha</label>
                            <b-form-input
                            name="Senha"
                            type="password"
                            class="inputField"
                            id="input-password"
                            placeholder="Insira sua senha"
                            v-model="password"
                            v-validate
                            data-vv-rules="required|min:8|max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Senha')">{{ errors.first('Senha') }}</span>
                    
                    </b-form>
                    <div v-if="!loadingRequest" class="formFooter">
                            <custom-button
                            type="submit"
                            label="Cadastrar-se"
                            v-on:buttonActivated="registerUser()"
                            ></custom-button>

                            <p class="trailingText" v-on:click="$router.push('/')">Já possui cadastro? Clique aqui!</p>
                    </div>
                    <div v-if="loadingRequest" class="formFooter">
                         <b-spinner type="grow" variant="light" label="Loading..."></b-spinner>
                    </div>
                </div>
            </div>
        </div>
        <custom-footer></custom-footer>
        <!-- Modal de erro -->
        
        <sweet-modal ref="loginErrorModal" icon="error" overlay-theme="dark" modal-theme="dark">
            {{ errorMessage }}
        </sweet-modal>

        <!-- Modal de sucesso no cadastro -->
        
        <sweet-modal ref="loginSuccessModal" v-on:close="$router.push('/')" icon="success" overlay-theme="dark" modal-theme="dark">
            Usuário cadastrado com sucesso!
        </sweet-modal>
    </div>
</template>

<script>
import Button from '../shared/ui-components/Button.vue'
import Footer from '../shared/ui-components/Footer.vue'
import UserService from '../../services/UserService'

export default {
    components: {
        'custom-button': Button,
        'custom-footer': Footer
    },

    data() {
        return {
            loadingRequest: false,
            name: '',
            email: '',
            password: '',
            errorMessage: ''
        }
    },

    methods: {
        registerUser () {
            this.$validator.validateAll()
            .then((success) => {
                if (success) {
                    this.loadingRequest = true;
                    UserService.registerUser(this.name, this.email, this.password)
                    .then((res) => {
                        console.log(res);
                        this.loadingRequest = false;
                        this.$refs.loginSuccessModal.open();
                    }, (err) => {
                        this.errorMessage = err.response.data.message
                        this.loadingRequest = false;
                        this.$refs.loginErrorModal.open();  
                    })
                    
                } else {
                    this.loadingRequest = false;
                }
            })
        }
    },
    
}
</script>
<style scoped>
.cardHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
}
.formCard {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: var(--pannelColor);
  height: 500px;
  width: 90%;
  max-width: 400px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
.formContent {
    padding: 30px;
}
.formFooter {
    margin-top: 50px;
    text-align: center
}

</style>