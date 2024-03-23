/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
  setupFiles: [
  ],
  coveragePathIgnorePatterns: [
  ],
  testPathIgnorePatterns: ['<rootDir>/__tests__/setup.js'],
};

module.exports = config;

process.env.DEV_MODE = 'true';
