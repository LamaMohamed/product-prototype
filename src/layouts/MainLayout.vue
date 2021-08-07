<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-dark shadow-2">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-bold"> All Products </q-toolbar-title>

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
      class="bg-grey-10 text-white"
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

      <q-list>
        <q-expansion-item clickable icon="mail" label="Inbox" default-opened>
          <q-expansion-item
            :header-inset-level="1"
            label="Receipts"
            default-opened
          >
          </q-expansion-item>
          <q-expansion-item
            :header-inset-level="1"
            label="Receipts"
            default-opened
          >
          </q-expansion-item>
        </q-expansion-item>

        <SideNav
          v-for="link in routeLinks"
          :key="link.title"
          v-bind="link"
          class="text-white q-my-xs"
        />
      </q-list>
      <q-list class="q-ma-xl">
        <q-icon size="20px" name="settings"></q-icon
      ></q-list>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import SideNav from '../components/sideNav.vue';

const userProfile = 'https://image.flaticon.com/icons/png/512/194/194938.png';
const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Orders',
    icon: 'assignment',
    link: '/',
  },
  {
    title: 'Products',
    icon: 'view_in_ar',
    link: '/product-list',
  },
  {
    title: 'Customers',
    icon: 'groups',
    link: '/',
  },
  {
    title: 'Analytics',
    icon: 'analytics',
    link: '/',
  },
  {
    title: 'Discounts',
    icon: 'price_change',
    link: '/',
  },
  {
    title: 'Website Builder',
    icon: 'desktop_windows',
    link: '/',
  },
  {
    title: 'Markting',
    icon: 'campaign',
    link: '/',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

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
