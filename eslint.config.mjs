import { defineFlatConfig } from "eslint-define-config";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineFlatConfig([
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
        document: true,
        window: true,
        console: true,
        module: true,
        setTimeout: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      reactHooks,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
     'no-console': ['warn'],
      'react/prop-types': 'off', // We will use TypeScript's types for components props instead
      'react/react-in-jsx-scope': 'off', // No need to import React with Next.js
      'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with how Next.js's <Link />
      'react-hooks/exhaustive-deps': 'off',
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "no-unused-vars": "warn",
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars": "error" ,
      'prettier/prettier': ['warn', prettierConfig], // Use your Prettier settings
    },
  },
]);
