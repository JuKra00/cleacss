<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
import ColorToggle from "./ColorToggle.vue";
</script>

<template>
  <Layout>
    <template #navbar-search>
      <ColorToggle />
    </template>
  </Layout>
</template>
