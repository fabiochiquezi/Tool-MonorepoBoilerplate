/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
      'ts-jest': {
          tsconfig: './tsconfig.jest.json'
      }
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: ['**/**/*.test.ts', '**/**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '__E2E__'],
  verbose: false
}
