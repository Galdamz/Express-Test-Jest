export default {
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
