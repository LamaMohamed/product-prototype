<template>
  <q-page class="q-py-md row justify-center items-center">
    <div v-if="loading">
      <q-spinner-grid color="primary" size="5em" />
    </div>
    <div class="col-7" v-if="!loading">
      <div class="row justify-between margin">
        <div class="col-5">
          <span style="padding-top: 10px; font-weight: bold"
            >Products List
            <div class="display">({{ products.length }} items)</div></span
          >
        </div>

        <div class="col-auto">
          <q-btn
            outline
            class="btndot"
            v-if="window.width < 1024"
            icon="more_horiz"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Import</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Export</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn v-if="window.width > 1024" flat no-caps label="Import" />
          <q-btn v-if="window.width > 1024" no-caps flat label="Export" />
          <q-btn
            :size="window.width > 1024 ? '15px' : '14px'"
            class="bg-green-6 text-white"
            no-caps
            :label="window.width > 1024 ? 'Add new product' : 'Add'"
          />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col">
          <ProductItems
            :products="products"
            :imagesUrl="imagesUrl[0]"
            :window="window"
          ></ProductItems>
        </div>
      </div>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </div>
  </q-page>
</template>

<style>
@media screen and (min-width: 1024px) {
  .display {
    display: inline;
  }
}
@media screen and (max-width: 1024px) {
  .btndot {
    width: 80px;
    margin-right: 7px;
  }
  .btnadd {
    width: 80px;
  }
  .col-7 {
    width: 100% !important;
  }
  .margin {
    margin: 17px !important;
  }
}
</style>

<script lang="ts">
import ProductItems from '../components/productItems.vue';
import { defineComponent } from 'vue';
import ProductService from '../services/productService';

export default defineComponent({
  name: 'ProductList',
  components: { ProductItems },

  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      loading: false,
      products: [],
      imagesUrl: [{ imageUrl: 'https://i.stack.imgur.com/y9DpT.jpg' }],
    };
  },
  created() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.loading = true;
    this.retrieveproducts();
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    retrieveproducts() {
      ProductService.getAll()
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.products = response.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  /*  setup() {
    let product = [],
      pageSize = 10;

    function fetchData() {
      const start = 0 * pageSize;

      return (product = products.slice(start, start + pageSize));
    }
    function onScroll(position) {
      fetchData();
    }

    return {
      onScroll,
      fetchData,
    };
  }, */
});
</script>
