import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default withNuxt(prettier, {
   plugins: {
      prettier: eslintPluginPrettier,
   },
   rules: {
      "prettier/prettier": "error",
   },
});
