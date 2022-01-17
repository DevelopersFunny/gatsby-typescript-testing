export default {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  reporters: ['default', 'jest-screenshot/reporter'],
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  testEnvironment: 'jsdom',
}
