module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react-refresh'
  ],
  'rules': {
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
    'indent': [ 'error', 2 ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ]
  },
}


