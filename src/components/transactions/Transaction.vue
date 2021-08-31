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
                            <label for="input-id">ID</label>
                            <b-form-input
                            id="input-id"
                            disabled
                            class="inputField"
                            type="text"
                            v-model="product.id"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label for="input-name">Nome</label>
                            <b-form-input
                            disabled
                            class="inputField"
                            name="Nome"
                            id="input-name"
                            type="text"
                            v-model="product.name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label for="input-Preco">Preço</label>
                            <b-form-input
                            disabled
                            name="Preco"
                            type="text"
                            class="inputField"
                            id="input-Preco"
                            v-model="product.price"
                            v-validate
                            data-vv-rules="required|max:255|decimal:2"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label for="input-Quantidade">Quantidade atual</label>
                            <b-form-input
                            disabled
                            name="Quantidade"
                            type="text"
                            class="inputField"
                            id="input-Quantidade"
                            v-model="product.quantity"
                            v-validate
                            data-vv-rules="required|numeric|min_value:1|max_value:9999"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <label for="transactionType">Natureza da movimentação</label>
                            <b-form-select
                            id="transactionType"
                            name="Natureza da movimentação"
                            style="width: 100%; height: 40px;"
                            class="inputField"
                            v-model="transaction.type"
                            :options="transactionOptions"
                            v-validate
                            data-vv-rules="required"
                            ></b-form-select>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Natureza da movimentação')">{{ errors.first('Natureza da movimentação') }}</span>
                        
                        <b-form-group>
                            <label for="input-NewQuantity">Quantidade produtos deseja movimentar?</label>
                            <b-form-input
                            name="Quantidade produtos deseja movimentar?"
                            type="text"
                            class="inputField"
                            id="input-NewQuantity"
                            v-model="transaction.quantity"
                            v-validate
                            data-vv-rules="required|numeric|min_value:1|max_value:9999"
                            ></b-form-input>
                        </b-form-group>
                        <span class="error" v-show="errors.has('Quantidade produtos deseja movimentar?')">{{ errors.first('Quantidade produtos deseja movimentar?') }}</span>
                    </b-form>
                    <div v-if="!loadingRequest" class="formFooter">
                            <span class="trailingText" v-on:click="$router.push('/dashboard')">
                                Voltar
                            </span>

                            <custom-button
                            type="submit"
                            label="Movimentar produto"
                            v-on:buttonActivated="createTransaction()"
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
        
        <sweet-modal ref="transactionErrorModal" icon="error" overlay-theme="dark" modal-theme="dark">
            {{ errorMessage }}, verifique se quantidade está correta
        </sweet-modal>

        <!-- Modal de sucesso no cadastro -->
        
        <sweet-modal ref="transactionSuccessModal" v-on:close="$router.push('/dashboard')" icon="success" overlay-theme="dark" modal-theme="dark">
            Movimentação efetuada com sucesso!
        </sweet-modal>
    </div>
</template>

<script>
import ProductService from '../../services/ProductService'
import TransactionService from '../../services/TransactionService'

export default {

    data() {
        return {
            currentWindow: '',
            productId: this.$route.params.productId,
            title: '',
            loadingRequest: false,
            errorMessage: '',
            transactionOptions: [
                { value: 'add', text: 'Entrada' },
                { value: 'subtract', text: 'Baixa' },
            ],
            transaction: {
                type: '',
                productId: this.$route.params.productId,
                productName: '',
                quantity: ''
            },
            product: {}
        }
    },

    created() {
        this.getProduct();
        if (this.$route.params.type === 'view') {
            this.currentWindow = 'view'
            this.title = 'Vizualizar Movimentação'
        } else {
            this.currentWindow = 'register'
            this.title = 'Nova movimentação'
        }
    },

    methods: {
        getProduct() {
            ProductService.getProducts({id: this.productId})
            .then((res) => {
                this.product = res.data[0];
                this.transaction.productName = this.product.name
            }, (err) => {
                console.log(err);
            })
        },
        
        createTransaction() {
            this.$validator.validateAll()
            .then((success) => {
                if (success) {
                    this.loadingRequest = true;
                    TransactionService.registerTransaction(this.transaction)
                    // eslint-disable-next-line no-unused-vars
                    .then((res) => {
                        this.loadingRequest = false;
                        this.$refs.transactionSuccessModal.open();
                    }, (err) => {
                        this.loadingRequest = false;
                        this.$refs.transactionErrorModal.open();
                        this.errorMessage = err.response.data.message;
                        console.log(err);
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
.formContent {
    padding: 30px;
}
.formFooter {
    margin-top: 50px;
    text-align: center
}

</style>