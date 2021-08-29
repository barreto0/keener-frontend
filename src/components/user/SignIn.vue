<template>
    <div>
        <div class="center-in-screen">
            <div class="formCard">
                <div class="cardHeader">
                    <font-awesome-icon class="icon" icon="boxes" />
                    <h4>Controle de estoque</h4>
                </div>
                <div class="formContent">
                    <b-form>
                        <b-form-group>
                            <label for="input-email">Email</label>
                            <b-form-input
                            class="inputField"
                            id="input-email"
                            name="Email"
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
                            type="password"
                            name="Senha"
                            class="inputField"
                            id="input-password"
                            placeholder="Insira sua senha"
                            v-model="password"
                            v-validate
                            data-vv-rules="required|max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Senha')">{{ errors.first('Senha') }}</span>
                    
                    </b-form>
                    <div class="formFooter">
                        <custom-button
                            type="submit"
                            label="Entrar"
                            v-on:buttonActivated="login()"
                            ></custom-button>

                            <p class="signupText" v-on:click="$router.push('/signup')">Ainda não possui cadastro? Clique aqui!</p>
                    </div>
                </div>
            </div>
        </div>
        <custom-footer></custom-footer>
        
        <!-- Modal de erro -->
        
        <sweet-modal ref="loginErrorModal" icon="error" overlay-theme="dark" modal-theme="dark">
            Ops! Algo de errado não está certo! Por favor verifique os dados de login!
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
        'custom-footer': Footer,
    },

    data() {
        return {
            loadingRequest: false,
            email: '',
            password: ''
        }
    },

    methods: {
        login () {
            this.$validator.validateAll()
            .then((success) => {
                if (success) {
                    this.loadingRequest = true;
                    UserService.authUser(this.email, this.password)
                    .then((res) => {
                        console.log(res);
                        this.loadingRequest = false;
                    }, (err) => {
                        console.log(err);
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
  background: #1e1e1e;
  height: 500px;
  width: 90%;
  max-width: 400px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
.formContent {
    margin-top: 50px;
    padding: 30px;
}
.formFooter {
    margin-top: 50px;
    text-align: center
}
.signupText {
    font-size: 12px;
    margin-top: 20px;
}
.signupText:hover {
    cursor: pointer;
    color: #7f00bf;
}
.icon {
    font-size: 30px;
    margin-bottom: 10px;
    margin-right: 12px;
    color: #7f00bf;
}
footer {
  color: gray;
  font-size: 15px;
  text-align: center;
  position:absolute;
  bottom:0;
  width:100%;
  height:90px;
}
footer, p{
    margin: 0;
}

</style>