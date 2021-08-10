<template>
  <q-expansion-item v-if="expand" clickable :icon="icon" :label="title">
    <q-item
      class="text-white"
      v-for="item in nested"
      :key="item.title"
      :header-inset-level="1"
      tag="routrt-link"
      :to="item.link"
    >
      <q-item-section class="text-center">
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>

  <q-item
    v-if="!expand"
    class="text-white"
    clickable
    tag="routrt-link"
    :to="link"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideNav',

  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },
    expand: {
      type: Boolean,
    },
    nested: {
      type: Array,
    },
    head: {
      type: String,
    },
  },

  setup() {
    /* const head: any = 'home';
    function getTitle(tit) {
      return console.log((this.head = tit));
    }
    return {
      getTitle,
      head,
    }; */
  },
});
</script>
