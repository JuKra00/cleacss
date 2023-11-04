import Layout from 'vitepress/dist/client/theme-default/Layout.vue';
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';
const DefaultTheme = {
  Layout,
  NotFound
};
import CustomLayout from "./CustomLayout.vue";
import "./index.css";

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
};
