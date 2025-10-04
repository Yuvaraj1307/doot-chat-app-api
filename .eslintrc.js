module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier', 'import', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
        'no-console': 'warn',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
            },
        ],
        'unused-imports/no-unused-imports': 'error',

    },
    ignorePatterns: ['dist', 'node_modules', 'src/graphql/schema.gql', 'src/graphql/generated/'],
}