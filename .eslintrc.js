module.exports = {
  extends: 'airbnb',
  globals: {
    'console': true,
    'window': true,
    'document': true,
    'localStorage': true,
    'jest': true,
    'describe': true,
    'it': true,
    'afterEach': true,
    'beforeEach': true,
    'expect': true,
  },
  rules: {
    'max-len': [2, 120, { 'ignorePattern': '^import' }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prefer-stateless-function': [0, { 'ignorePureComponents': true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-typos': [false], // see https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/jsx-one-expression-per-line': [2],
    'react/destructuring-assignment': false,
  },
  parser: 'babel-eslint',
};
