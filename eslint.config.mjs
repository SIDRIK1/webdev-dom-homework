import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    prettierConfig,
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];
