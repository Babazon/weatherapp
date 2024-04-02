module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  cacheDirectory: '.jest/cache',
  globals: {
    navigator: {},
    'ts-jest': {
      babelConfig: true,
    },
    window: {},
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/ImageMock.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/packages/'],
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.js',
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|react-navigation|@react-navigation/stack|@react-navigation/elements|react-native-vector-icons)).*/',
    'node_modules/@react-navigation/elements/lib/commonjs/assets/back-icon.png',
  ],
};
