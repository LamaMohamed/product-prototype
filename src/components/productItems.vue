<template>
  <div class="q-py-sm">
    <q-card class="my-card">
      <q-card-section>
        <div class="row q-ma-sm">
          <div class="col-4">
            <q-input
              outlined
              v-model="filter"
              dense
              label="Search by product name, SKU or barcode"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col q-mx-sm mbtn" v-if="window?.width < 1024">
            <q-btn
              outline
              no-caps
              class="wbtn"
              color="dark"
              label="Select"
              icon-right="check_box"
            />
          </div>
          <div class="col q-mx-sm mbtn">
            <q-btn
              outline
              no-caps
              class="wbtn"
              color="dark"
              label="Filters"
              icon-right="tune"
            />
          </div>
          <div class="col q-mx-sm mbtn">
            <q-btn
              outline
              no-caps
              class="wbtn sortbtn"
              color="dark"
              label="Sort"
              icon-right="unfold_more"
            />
          </div>
        </div>
      </q-card-section>
      <q-markup-table>
        <thead class="text-left text-grey-8 displayCheck">
          <tr>
            <th class="text-right displayCheck">
              <q-checkbox size="sm" />
            </th>
            <th style="width: 150px"></th>
            <th>Product</th>
            <th>Status</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody class="text-left">
          <tr v-for="product in products" :key="product.id">
            <td class="text-right displayCheck">
              <q-checkbox size="sm" v-model="selected" />
            </td>
            <td>
              <q-img
                style="width: 80px; height: 80px"
                :src="imagesUrl?.imageUrl"
              />
            </td>
            <td>{{ product.name }}</td>
            <td>
              <q-badge
                class="text-dark q-pa-sm"
                rounded
                :color="
                  product.status === 'Active'
                    ? 'light-green-2'
                    : product.status === 'Draft'
                    ? 'amber-1'
                    : 'grey-2'
                "
                :label="product.status"
              />
            </td>
            <td>{{ product.stock }} in stock</td>
            <td>{{ product.price }} EGP</td>
            <td>{{ product.type }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<style>
@media screen and (min-width: 1024px) {
  .sortbtn {
    float: right !important;
    width: 107px;
  }
}
@media screen and (max-width: 1024px) {
  .col {
    width: 100% !important;
  }
  .col-4 {
    width: 100% !important;
  }
  .displayCheck {
    display: none;
  }
  .mbtn {
    margin-top: 15px;
  }
  .wbtn {
    width: 100% !important;
    padding-right: 2px;
    padding-left: 2px;
  }
}
</style>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
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
    fetchData: {},
    imagesUrl: {
      type: Object,
    },
    active: {
      type: Boolean,
    },
    window: {
      type: Object,
    },

    setup() {
      return {
        sortedArray() {
          this.products.sort((a, b) => a.name - b.name);
        },
        filter: ref(''),
        selected: ref(true),
      };
    },
  },
});
</script>
