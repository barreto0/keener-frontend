<template>
    <div style="padding: 30px;">
        <h3 v-if="isEmpty">Ainda não foi feito nenhuma movimentação no estoque :)</h3>
        <b-table
        v-if="!isEmpty"
        sticky-header="400px"
        responsive
        dark
        :busy="isBusy"
        style="color: white; text-align: center;"
        :items="transactions"
        :fields="fields"
        >
            <template #table-busy>
                <div class="text-center my-2">
                <b-spinner style="color: var(--accentPurple);" class="align-middle"></b-spinner>
                <strong style="margin-left: 15px;">Carregando movimentações...</strong>
                </div>
            </template>

            <template #cell(type)="data">
            {{ data.item.type === 'add' ? 'Entrada': 'Baixa' }}
            </template>

            <template #cell(createdAt)="data">
            {{ data.item.createdAt | formatDate }}
            </template>

            <template #cell(updatedAt)="data">
            {{ data.item.updatedAt | formatDate }}
            </template>

        </b-table>
    </div>
</template>

<script>
import ProductService from '../../services/ProductService'
import TransactionService from '../../services/TransactionService';

export default {
    data() {
        return {
            isBusy: true,
            isEmpty: true,
            transactions: [],
            filters: {},
            fields: [
                {
                    key: 'id',
                    label: 'ID da movimentação'
                },
                {
                    key: 'productName',
                    label: 'Produto',
                },
                {
                    key: 'type',
                    label: 'Natureza'
                },
                {
                    key: 'quantity',
                    label: 'Quantidade (Und.)'
                },
                {
                    key: 'createdAt',
                    label: 'Data de cadastro'
                },
                {
                    key: 'updatedAt',
                    label: 'Atualizado a última vez'
                }
            ],
        }
    },

    created() {
        this.getAllTransactions();
    },

    methods: {
        getAllTransactions() {
            this.isBusy = true;
            TransactionService.getTransactions(this.filters)
            .then((res) => {
                this.transactions = res.data.transactions;
                this.transactions.length === 0 ? this.isEmpty = true : this.isEmpty = false
                this.isBusy = false;
            }, (err) => {
                console.log(err);
                this.isBusy = false;
            })
        },

        getProduct(productId) {
            ProductService.getProducts({id: productId})
            .then((res) => {
                this.product = res.data[0];
            }, (err) => {
                console.log(err);
            })
        },

    }
}
</script>

<style scoped>
.icon {
    font-size: 20px;
    color: var(--accentPurple);
    margin: 5px;
}
</style>