<template>
    <div style="padding: 30px;">
        <h3 v-if="isEmpty">Ainda não há produtos cadastrados :)</h3>
        <b-table
        v-if="!isEmpty"
        sticky-header="400px"
        responsive
        dark
        hover
        :busy="isBusy"
        style="color: white; cursor: pointer; text-align: center;"
        :items="products"
        :fields="fields"
        @row-clicked="rowClickHandler"
        >
            <template #table-busy>
                <div class="text-center my-2">
                <b-spinner style="color: var(--accentPurple);" class="align-middle"></b-spinner>
                <strong style="margin-left: 15px;">Carregando Produtos...</strong>
                </div>
            </template>

            <template #cell(description)="data">
                <div class="w-100 text-truncate">
                    {{ data.item.description.length > 20 ? `${data.item.description.match(/.{20}/g)[0]}...` : data.item.description }}
                </div>
            </template>

            <template #cell(createdAt)="data">
            {{ data.item.createdAt | formatDate }}
            </template>

            <template #cell(updatedAt)="data">
            {{ data.item.updatedAt | formatDate }}
            </template>

            <template #cell(id)="data">
                <font-awesome-icon  @click="$router.push(`/transaction/new/${data.item.id}`)" id="movement" class="icon" icon="dolly"/>
                <b-tooltip target="movement" triggers="hover">
                    Movimentar<br/>Produto
                </b-tooltip>
            </template>
        </b-table>
    </div>
</template>

<script>
import ProductService from '../../services/ProductService'

export default {
    data() {
        return {
            isBusy: true,
            isEmpty: false,
            products: [],
            filters: {},
            fields: [
                {
                    key: 'name',
                    label: 'Nome'
                },
                {
                    key: 'category',
                    label: 'Categoria'
                },
                {
                    key: 'description',
                    label: 'Descrição',
                },
                {
                    key: 'price',
                    label: 'Preço (R$)'
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
                },
                {
                    key: 'id',
                    label: ' '
                }
            ],
        }
    },

    created() {
        this.getAllProducts();
    },

    methods: {
        getAllProducts() {
            this.isBusy = true;
            ProductService.getProducts(this.filters)
            .then((res) => {
                this.products = res.data;
                this.products.length === 0 ? this.isEmpty = true : this.isEmpty = false
                this.isBusy = false;
            }, (err) => {
                console.log(err);
                this.isBusy = false;
            })
        },

        // eslint-disable-next-line no-unused-vars
        rowClickHandler(record, index) {
            this.$router.push(`/product/${record.id}`);
        },
    }
}
</script>

<style scoped>
.icon {
    font-size: 25px;
    color: var(--accentPurple);
    margin: 5px;
}
</style>