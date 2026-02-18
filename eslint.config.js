import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import { fileURLToPath } from 'node:url';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),

  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.svelte'],
        svelteConfig
      }
    }
  },

  ...svelte.configs.prettier
);
