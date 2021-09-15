// jest.config.ts
// install ts-node to work
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "jest-expo",
    testEnvironment: 'node',
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
    ],
    setupFilesAfterEnv: [
      'jest-styled-components',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.tsx",
      "!src/**/*.test.tsx"
    ],
    coverageReporters: [
      "lcov"
    ]
  };
};
