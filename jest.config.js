module.exports = {
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  testMatch: [
    '<rootDir>/projects/**/__tests__/**/*.spec.ts',
  ],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts',
  ],
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json'
    },
  },
  collectCoverageFrom: [
    'projects/**/*.ts',
    '!projects/**/__test__/**',
    '!projects/**/cypress/**',
    '!projects/**/bootstrap.ts',
    '!**/node_modules/**',
    '!**/src/**/*.module.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/main.ts',
    '!**/environments/**',
    '!**/icons/**',
    '!**/assets/**',
    '!**/version/**'
  ]
};
