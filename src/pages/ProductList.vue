<template>
  <q-page class="q-py-xl row justify-center items-center" >
  <div class="col-8" v-if="!loading">
  <div class="row justify-between">
   <div class="col">
      <span class="text-bold">Products List ({{products.length}} items)</span>
    </div>
    <div class="q-mx-sm">
    <q-btn flat no-caps label="Import" />
    <q-btn no-caps flat label="Export" />
    </div>
  <q-btn no-caps class="bg-green-6 text-white" label="Add new product" />
  </div>
  <div class="col">
          <ProductItems 
            :products="products"
            :imagesUrl="imagesUrl[0]"
          ></ProductItems>
 
      </div>
      </div>
        <div v-if="loading">
        <q-spinner-grid color="primary" size="5em" />
      </div>
  </q-page>
</template>

<script lang="ts">
import ProductItems from '../components/productItems.vue';
import { defineComponent } from 'vue';
import ProductService from '../services/productService';

export default defineComponent({
  name: 'ProductList',
  components: { ProductItems },

  data() {
    return {
      /* loading: false,
      products: [], */
      imagesUrl: [{imageUrl:'https://i.stack.imgur.com/y9DpT.jpg'}],
      products: [
        {id:1,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:2,name:"Coconut - Creamed, Pure",status:"Hide",stock:66,price:55,type:"t-shirt"},
        {id:3,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:4,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:5,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:6,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:7,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:8,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:9,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:10,name:"Moconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:11,name:"Coconut - Dry, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:12,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:13,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:14,name:"Doconut - Pull, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:15,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:16,name:"Noconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:17,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:18,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:19,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
        {id:20,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:21,name:"Coconut - Creamed, Pure",status:"Draft",stock:66,price:55,type:"t-shirt"},
        {id:22,name:"Coconut - Creamed, Pure",status:"Active",stock:66,price:55,type:"t-shirt"},
      ],
    };
  },
  created() {
  /*   this.loading = true;
    this.retrieveproducts(); */
  },

  methods: {
   /*  retrieveproducts() {
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
    }, */
  },
});
</script>
