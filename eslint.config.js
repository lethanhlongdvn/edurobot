import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        // Các biến toàn cục từ thư viện ngoài hoặc file script khác
        askAI: "readonly",
        celebrate: "readonly",
        confetti: "readonly",
        firebase: "readonly",
        db: "readonly",
        closeStudentModal: "readonly",
        XLSX: "readonly",
        html2pdf: "readonly"
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "playwright-report/",
      "test-results/",
      ".vscode/",
      "_archive/",
      "js/**/*.js",
      "!js/data/vietnamese/3/*.js",
      "scripts/",
      "tests/",
      "sw.js",
    ],
  },
];
