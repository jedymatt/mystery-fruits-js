import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
      globals: {
        // Nuxt auto-imports
        useFruits: 'readonly',
        useHistory: 'readonly',
        useInstruction: 'readonly',
        useTheme: 'readonly',
      },
    },
    rules: {
      // Disable multi-word component names for Nuxt pages/layouts
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['dist/', '.nuxt/', '.output/'],
  },
]
