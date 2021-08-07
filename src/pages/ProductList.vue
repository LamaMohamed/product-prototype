<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md">
      <q-markup-table v-if="!loading">
        <thead>
          <tr>
            <th label="image"></th>
            <th class="text-left">Product</th>
            <th class="text-right">Status</th>
            <th class="text-right">Stock</th>
            <th class="text-right">Price</th>
            <th class="text-right">Type</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem
            v-for="product in products"
            :key="product.id"
            :products="product"
            :imagesUrl="imageUrl[0]"
          ></ProductItem>
        </tbody>
      </q-markup-table>
      <div v-if="loading">
        <q-spinner-grid color="primary" size="5em" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ProductItem from '../components/productItem.vue';
import { defineComponent } from 'vue';
import ProductService from '../services/productService';

export default defineComponent({
  name: 'ProductList',
  components: { ProductItem },

  data() {
    return {
      loading: false,
      products: [],
      imageUrl: ['https://i.stack.imgur.com/y9DpT.jpg'],
    };
  },
  created() {
    this.loading = true;
    this.retrieveproducts();
  },

  methods: {
    retrieveproducts() {
      ProductService.getAll()
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.products = response.data;
          this.loading = false;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
</script>
