import DefaultTheme from "vitepress/theme";
import "../../../dist/cleacss.css";
import "./custom.css";
import CustomLayout from "./CustomLayout.vue";

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
};
