import css from "@eslint/css";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import baselineJs, { BASELINE } from "eslint-plugin-baseline-js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  {
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    extends: ["css/recommended"],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js, "baseline-js": baselineJs },
    extends: [
      "js/recommended",
      tseslint.configs.recommended,
      baselineJs.configs.recommended({ available: BASELINE.WIDELY }),
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },

  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    extends: [pluginVue.configs["flat/recommended"]],
  },

  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
]);
