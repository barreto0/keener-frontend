<template>
    <div>
        <navbar></navbar>
        <div class="card fadeIn first">
            <div>
                <div class="cardHeader">
                    <h4>{{ title }}</h4>
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
                            placeholder="Insira o nome do produto"
                            v-model="product.name"
                            v-validate
                            data-vv-rules="required|max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Nome')">{{ errors.first('Nome') }}</span>

                        <b-form-group>
                            <label for="input-email">Categoria</label>
                            <b-form-input
                            class="inputField"
                            name="Categoria"
                            id="input-category"
                            type="text"
                            placeholder="Insira a categoria do produto"
                            v-model="product.category"
                            v-validate
                            data-vv-rules="required|max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Categoria')">{{ errors.first('Categoria') }}</span>

                        <b-form-group>
                            <label for="input-password">Descrição</label>
                            <b-form-input
                            name="Descricao"
                            type="text"
                            class="inputField"
                            id="input-Descricao"
                            placeholder="Insira uma breve descrição do produto"
                            v-model="product.description"
                            v-validate
                            data-vv-rules="max:255"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Descricao')">{{ errors.first('Descricao') }}</span>

                        <b-form-group>
                            <label for="input-password">Preço</label>
                            <b-form-input
                            name="Preco"
                            type="text"
                            class="inputField"
                            id="input-Preco"
                            placeholder="Insira o preço do produto"
                            v-model="product.price"
                            v-validate
                            data-vv-rules="required|max:255|decimal:2"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Preco')">{{ errors.first('Preco') }}</span>

                        <b-form-group>
                            <label for="input-password">Quantidade</label>
                            <b-form-input
                            name="Quantidade"
                            type="text"
                            class="inputField"
                            id="input-Quantidade"
                            placeholder="Insira a quantidade do produto"
                            v-model="product.quantity"
                            v-validate
                            data-vv-rules="required|numeric|min_value:1|max_value:9999"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Quantidade')">{{ errors.first('Quantidade') }}</span>
                    
                    </b-form>
                    <div v-if="!loadingRequest" class="formFooter">
                            <span class="trailingText" v-on:click="$router.push('/dashboard')">
                                Voltar
                            </span>

                            <custom-button
                            type="submit"
                            :label="currentWindow === 'edit' ? 'Atualizar Produto' : 'Cadastrar Produto'"
                            v-on:buttonActivated="createOrUpdateProduct()"
                            ></custom-button>
                    </div>
                    <div v-if="loadingRequest" class="formFooter">
                         <b-spinner type="grow" variant="light"></b-spinner>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top: 100px;">
            <custom-footer></custom-footer>
        </div>
        <!-- Modal de erro -->
        
        <sweet-modal ref="productErrorModal" icon="error" overlay-theme="dark" modal-theme="dark">
            {{ errorMessage }}
        </sweet-modal>

        <!-- Modal de sucesso no cadastro -->
        
        <sweet-modal ref="productSuccessModal" v-on:close="$router.push('/dashboard')" icon="success" overlay-theme="dark" modal-theme="dark">
            Produto cadastrado com sucesso!
        </sweet-modal>
    </div>
</template>

<script>
import ProductService from '../../services/ProductService'

export default {

    data() {
        return {
            currentWindow: '',
            title: '',
            loadingRequest: false,
            errorMessage: '',
            product: {
                name: '',
                category: '',
                description: '',   
                price: '',
                quantity: ''
            }
        }
    },

    created() {
        if (this.$route.params.id !== 'new') {
            this.currentWindow = 'edit'
            this.title = 'Editar produto'
        } else {
            this.currentWindow = 'register'
            this.title = 'Cadastrar novo produto'
        }
    },

    methods: {
        createOrUpdateProduct() {
            this.$validator.validateAll()
            .then((success) => {
                if (success) {
                    this.loadingRequest = true;
                    ProductService.registerProduct(this.product)
                    .then((res) => {
                        console.log(res);
                        this.loadingRequest = false;
                        this.$refs.productSuccessModal.open();
                    }, (err) => {
                        this.errorMessage = err.response.data.message
                        this.loadingRequest = false;
                        this.$refs.productErrorModal.open();  
                    })
                    console.log(this.product);
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
.formContent {
    padding: 30px;
}
.formFooter {
    margin-top: 50px;
    text-align: center
}

</style>