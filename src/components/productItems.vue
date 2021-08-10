<template>
  <div class="q-py-sm">
    <q-card class="my-card">
      <q-card-section>
        <div class="row q-ma-sm">
          <div class="col-4">
            <q-input
              outlined
              dense
              label="Search by product name, SKU or barcode"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col q-mx-sm mbtn" v-if="window?.width < 1023">
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
        <tbody class="text-left text-grey-10 text-weight-medium">
          <tr v-for="product in products" :key="product.id">
            <hr v-if="window?.width < 500" />
            <td class="text-right displayCheck">
              <q-checkbox size="sm" />
            </td>
            <td>
              <q-img
                class="rounded-borders imgWidth"
                :src="imagesUrl?.imageUrl"
              />
            </td>
            <td class="name">
              {{ product.name }}

              <span> {{ product.type }}</span>
            </td>
            <td class="status">
              <q-badge
                size="15px"
                class="text-grey-10 text-weight-medium q-pa-sm"
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
            <td class="stock">
              <span>{{ product.stock }} in stock</span>
            </td>
            <td class="displaynone" style="padding: 0px; font-size: 8px">
              <q-icon name="fiber_manual_record" />
            </td>
            <td>
              <span>{{ product.price }} EGP</span>
            </td>
            <td class="displayCheck">
              <span>{{ product.type }}</span>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<style>
@media screen and (min-width: 500px) {
  .displaynone {
    display: none;
  }
  .sortbtn {
    float: right !important;
    width: 107px;
  }
  .imgWidth {
    width: 80px;
    height: 80px;
  }
}
@media screen and (max-width: 500px) {
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
    width: 10px;
  }
  .wbtn {
    width: 100% !important;
    padding-right: 2px;
    padding-left: 2px;
  }
  .q-markup-table {
    width: 100% !important;
  }
  tbody tr td {
    width: auto !important;
    border: none !important;
  }
  .status {
    float: right !important;
    margin: 5px 11px;
  }

  .name {
    margin-bottom: 100px !important;
  }

  .q-table th,
  .q-table td,
  .q-table tr {
    padding: 7px 5px !important;
  }
  tbody,
  td {
    display: inline;
    padding: 0;
  }
  .q-img {
    width: 55px;
    height: 55px;
    margin-left: 12px;
  }
  .stock span {
    margin-left: 80px;
    padding: 0px;
  }

  hr {
    margin: 25px 0;
    background-color: #ebebeb !important;
    width: 100%;
  }
}
@media screen and (max-width: 320px) {
  .wbtn {
    width: 80px !important;
  }
  hr {
    margin: 5px 0;
  }
}
@media screen and (max-width: 281px) {
  .wbtn {
    width: 65px !important;
  }
  hr {
    margin: 5px 0;
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
    computed: {},
    setup() {
      /* function sortedArray() {
        return props.products.sort(function (a, b) {
          return a.name > b.name;
        });
      } */
      return {
        filter: ref(''),
        selected: ref(true),
      };
    },
  },
});
</script>
