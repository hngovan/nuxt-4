// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'prefer-const': 'error',
    'no-console': 'error',
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/comma-dangle': ['error', 'never'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  }
})
