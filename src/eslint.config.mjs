import js from "@eslint/js";
import nextPlugin from "eslint-config-next";

const eslintConfig = [
  js.configs.recommended,
  ...nextPlugin,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      ".vscode/**",
    ],
  },
  {
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "react-hooks/immutability": "off",
    },
  },
];

export default eslintConfig;
