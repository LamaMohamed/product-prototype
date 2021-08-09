<template>
<div class="q-py-md">
    <q-card class="my-card">
      <q-card-section>
      <div class="row">
      <div class="col">
         <q-input outlined v-model="filter" dense label="Search by product name, SKU or barcode" >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        </div>
        <div class="col q-px-md">
        <q-btn outline no-caps color="dark" label="Filters" icon-right="tune"/>
        </div>
        <div class="col">
        <q-btn outline  no-caps @click="sortedData" style="float:right" color="dark" label="Sort" icon-right="unfold_more"/>
        </div>
        </div>
      </q-card-section>
        <q-markup-table>
      <thead class="text-left text-grey-8">
        <tr>
          <th class="text-right"><q-checkbox size="sm" v-model="selected" /></th>
          <th style="width:150px"></th>
          <th >Product</th>
          <th >Status</th>
          <th >Stock</th>
          <th >Price</th>
          <th >Type</th>
        </tr>
      </thead>
      <tbody class="text-left">
        <tr v-for="product in products" >
        <td class="text-right"> <q-checkbox size="sm" v-model="selected" /></td>
        <td> <q-img style="width:80px;height:80px" :src="imagesUrl.imageUrl" /></td>
          <td >{{product.name}}</td>
          <td ><q-badge class="text-dark q-pa-sm" rounded :color="product.status === 'Active'? 'light-green-2':product.status === 'Draft'? 'amber-1':'grey-2'" :label="product.status" /></td>
          <td >{{product.stock}} in stock</td>
          <td >{{product.price}} EGP</td>
          <td >{{product.type}}</td>
        </tr>
        </tbody>
        </q-markup-table>
         
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType,ref } from 'vue';
import { Product } from './models';

export default defineComponent({
  name: 'ProductItems',

  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array as PropType<Product[]>,
      /* type:Array, */
      default: () => [],
    },
    imagesUrl: {
      type: String,
    },
    active: {
      type: Boolean,
    },

  setup() {
   const selected = ref([])
    return {
     sortedArray(){
    return this.products.sort((a, b) => a.name - b.name );
},
      filter: ref(''),
      selected,
    }
  }
  }
});
</script>
