<template>
  <tr>
    <td><img :width="auto" :src="imagesUrl" /></td>
    <td>{{ products.name }}</td>
    <td>{{ products.status }}</td>
    <td>{{ products.stock }}</td>
    <td>{{ products.price }}</td>
    <td>{{ products.type }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, toRef, Ref } from 'vue';
import { Product } from './models';

function useDisplayProduct(products: Ref<Product[]>) {
  const productCount = computed(() => products.value.length);
  return { productCount };
}

export default defineComponent({
  name: 'ProductItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array as PropType<Product[]>,
      default: () => [],
    },
    imagesUrl: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    return { ...useDisplayProduct(toRef(props, 'products')) };
  },
});
</script>
