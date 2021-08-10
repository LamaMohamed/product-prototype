<template>
  <q-page v-scroll="onScroll" class="q-py-xl row justify-center items-center">
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
            @click="fetchData"
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
    margin: 17px;
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
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },

  setup() {
    const imagesUrl = [{ imageUrl: 'https://i.stack.imgur.com/y9DpT.jpg' }],
      products = [
        {
          id: 1,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 2,
          name: 'Coconut - Creamed, Pure',
          status: 'Hide',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 3,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 4,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 5,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 6,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 7,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 8,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 9,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 10,
          name: 'Moconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 11,
          name: 'Coconut - Dry, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 12,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 13,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 14,
          name: 'Doconut - Pull, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 15,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 16,
          name: 'Noconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 17,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 18,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 19,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 20,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 21,
          name: 'Coconut - Creamed, Pure',
          status: 'Draft',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
        {
          id: 22,
          name: 'Coconut - Creamed, Pure',
          status: 'Active',
          stock: 66,
          price: 55,
          type: 't-shirt',
        },
      ];
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
      imagesUrl,
      products,
      onScroll,
      fetchData,
    };
  },
  /* } */

  /* data() {
    return {  */
  /* loading: false,
      products: [], */
  /*     imagesUrl: [{imageUrl:'https://i.stack.imgur.com/y9DpT.jpg'}],
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
  created() { */
  /*   this.loading = true;
    this.retrieveproducts(); */
  /*  }, */

  /* methods: { */
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
  /*  }, */
});
</script>
