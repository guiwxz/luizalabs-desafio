module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.spec.ts',
    '!**/node_modules/**',
    '!src/test/**',
    '!src/shared/config/**',
    '!src/index.ts'
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  setupFiles: [
    './src/test/testConfig.js'
  ]
};