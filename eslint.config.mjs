import js from '@eslint/js';
import globals from 'globals';
// import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

// export default defineConfig([
//     {
//         files: ['**/*.{js,mjs,cjs}'],
//         plugins: { js },
//         extends: ['js/recommended'],
//         languageOptions: { globals: globals.browser },
//         config,
//         plugin,
//     },
// ]);
export default [
    js.configs.recommended, // ✅ Правильно!
    prettierConfig, // ✅ Конфиг Prettier
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        plugins: {
            prettier: prettierPlugin, // ✅ Правильно!
        },
        rules: {
            'prettier/prettier': 'error', // ✅ Prettier как правило
        },
    },
];
