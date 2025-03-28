// @ts-check
import { globalIgnores } from '@warp-drive/internal-config/eslint/ignore.js';
import * as node from '@warp-drive/internal-config/eslint/node.js';
import * as typescript from '@warp-drive/internal-config/eslint/typescript.js';
import * as qunit from '@warp-drive/internal-config/eslint/qunit.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // all ================
  globalIgnores(),

  // browser (js/ts) ================
  typescript.browser({
    srcDirs: ['src'],
    allowedImports: [
      '@embroider/macros',
      '@ember/application/namespace',
      'ember',
      '@ember/debug',
      '@ember/array/proxy',
      '@ember/object/promise-proxy-mixin',
      '@ember/object/proxy',
      '@ember/application',
    ],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  }),

  // node (module) ================
  node.esm(),

  // node (script) ================
  node.cjs(),

  // Test Support ================
  qunit.ember({
    files: ['src/test-support/**/*.{js,ts}'],
    allowedImports: ['@ember/debug', '@ember/owner'],
  }),
];
