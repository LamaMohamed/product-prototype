<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-dark shadow-2">
        <q-btn
          class="toggle"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-bold">
          <span class="title">All Products</span>
        </q-toolbar-title>

        <q-avatar>
          <img :src="userData" />
        </q-avatar>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      bordered
      class="bg-dark text-white"
    >
      <q-item class="q-my-md">
        <q-avatar class="q-mx-md"> <img :src="userData" /> </q-avatar>
        <q-item-section>
          <q-item-label>DOTS</q-item-label>
          <q-item-label class="text-white" caption
            >Free trial plan</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-list class="q-my-xl">
        <SideNav v-for="link in routeLinks" :key="link.title" v-bind="link" />
        <q-list class="fixed-bottom-left q-ma-lg">
          <q-icon size="20px" name="settings"></q-icon
        ></q-list>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@media screen and (min-width: 1024px) {
  .toggle {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .title {
    display: none;
  }
}
</style>

<script lang="ts">
import SideNav from '../components/sideNav.vue';

const userProfile = 'https://image.flaticon.com/icons/png/512/194/194938.png';
const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
    expand: false,
    nested: [{}],
  },
  {
    title: 'Orders',
    icon: 'assignment',
    link: '/',
    expand: false,
    nested: [{}],
  },
  {
    title: 'Products',
    icon: 'view_in_ar',
    expand: true,
    nested: [
      {
        title: 'All Products',
        link: '/product-list',
      },
      {
        title: 'Inventory',
        link: '/',
      },
      {
        title: 'Collections',
        link: '/',
      },
    ],
  },
  {
    title: 'Customers',
    icon: 'groups',
    link: '/',
    expand: false,
    nested: [{}],
  },
  {
    title: 'Analytics',
    icon: 'analytics',
    link: '/',
    expand: false,
    nested: [{}],
  },
  {
    title: 'Discounts',
    icon: 'price_change',
    link: '/',
    expand: false,
    nested: [{}],
  },
  {
    title: 'Website Builder',
    icon: 'desktop_windows',
    link: '/',
    expand: false,
    nested: [{}],
  },
  {
    title: 'Markting',
    icon: 'campaign',
    link: '/',
    expand: false,
    nested: [{}],
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',

  components: {
    SideNav,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      routeLinks: linksList,
      userData: userProfile,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
