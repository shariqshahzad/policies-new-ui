module.exports = {
  extends: ['@takamol/eslint-config'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link', 'RouterLink'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/tests/**/*.spec.{js,ts}'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
