module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'at-rule-semicolon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'no-descending-specificity': null,
    'no-empty-source': null,
    'order/order': [
      'dollar-variables',
      'custom-properties',
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      'rules',
      'at-rules',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
    ],
  },

  root: true,
};
