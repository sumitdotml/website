// eslint.config.mjs
import path from "path";
import { fileURLToPath } from "url";

// Convert URL to path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    extends: ['eslint:recommended', 'plugin:react/recommended', 'next/core-web-vitals'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
];

export default eslintConfig;