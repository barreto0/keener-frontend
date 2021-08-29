<template>
    <div>
        <div class="center-in-screen">
            <div class="formCard">
                <div class="cardHeader">
                    <h4>Cadastre-se na plataforma</h4>
                </div>
                <div class="formContent">
                    <b-form>
                        <b-form-group>
                            <label for="input-email">Nome</label>
                            <b-form-input
                            class="inputField"
                            id="input-name"
                            type="text"
                            placeholder="Insira seu nome"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label for="input-email">Email</label>
                            <b-form-input
                            class="inputField"
                            id="input-email"
                            type="text"
                            placeholder="Insira seu email"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label for="input-password">Senha</label>
                            <b-form-input
                            type="password"
                            class="inputField"
                            id="input-password"
                            placeholder="Insira sua senha"
                            required
                            ></b-form-input>
                        </b-form-group>
                        
                        <div class="formFooter">
                            <custom-button
                            type="submit"
                            label="Cadastrar-se"
                            v-on:buttonActivated="nuke()"
                            ></custom-button>

                            <p class="signinText" v-on:click="$router.push('/')">Já possui cadastro? Clique aqui!</p>
                        </div>
                    
                    </b-form>
                </div>
            </div>
        </div>
        <custom-footer></custom-footer>
    </div>
</template>

<script>
import Button from '../shared/ui-components/Button.vue'
import Footer from '../shared/ui-components/Footer.vue'

export default {
    components: {
        'custom-button': Button,
        'custom-footer': Footer
    },

    methods: {
    
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
    padding: 30px;
}
.formFooter {
    margin-top: 50px;
    text-align: center
}
.signinText {
    font-size: 12px;
    margin-top: 20px;
}
.signinText:hover {
    cursor: pointer;
    color: #7f00bf;
}

</style>