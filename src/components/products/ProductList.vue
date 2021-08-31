<template>
    <div style="padding: 30px;">
        <b-table
        sticky-header="600px"
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
        </b-table>
    </div>
</template>

<script>
import ProductService from '../../services/ProductService'

export default {
    data() {
        return {
            isBusy: true,
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
                    label: 'Preço'
                },
                {
                    key: 'quantity',
                    label: 'Quantidade'
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
        this.getAllProducts();
    },

    methods: {
        getAllProducts() {
            this.isBusy = true;
            ProductService.getProducts(this.filters)
            .then((res) => {
                this.products = res.data;
                this.isBusy = false;
            }, (err) => {
                console.log(err);
                this.isBusy = false;
            })
        },

        // eslint-disable-next-line no-unused-vars
        rowClickHandler(record, index) {
        // 'record' will be the row data from items
        // `index` will be the visible row number (available in the v-model 'shownItems')
            this.$router.push(`/product/${record.id}`);
        },
    }
}
</script>

<style scoped>

</style>