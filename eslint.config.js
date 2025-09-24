import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
  // Ignorar pastas/arquivos globais
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      '*.config.js',
      '.eslintrc.js',
      'jest.config.ts'
    ]
  },

  pluginVue.configs['flat/recommended'],

  // Regras base JS
  js.configs.recommended,

  // Regras base TS (v8+)
  ...tseslint.configs.recommended,

  // Suas regras do projeto
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      // Adicione plugins do Vue aqui, se necessário
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      // TS
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Gerais
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error'
    }
  }
)
