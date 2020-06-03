module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    indent: [
      'error',
      'tab'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        'maxEOF': 0,
        'maxBOF': 0
      }
    ],
    'no-unused-vars': 0,
    'no-undef': 0,
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          minProperties: 1,
          multiline: true
        },
        'ObjectPattern': 'never',
        'ImportDeclaration': {
          minProperties: 3
        }
      }
    ],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems: 2
      }
    ],
    'array-element-newline': [
      'error',
      'always'
    ],
    'vue/require-prop-types': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}