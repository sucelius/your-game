module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {

    'react/function-component-definition': 'off',

    'import/no-extraneous-dependencies': 'off',

    'react/prop-types': 'off',

    'import/prefer-default-export': 'off',

    'default-param-last': 'off',

    'max-len': 'off',

  },
};
