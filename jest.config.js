const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    path.join(__dirname, "src/utils/testUtils")
  ],
  setupFilesAfterEnv: ["<rootDir>/src/utils/testUtils/setupTests.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/src/config/jest/cssTransform.js"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts",
    "!**/node_modules/**"
  ],
  coverageThreshold: {
    global: {
      statements: 20,
      branches: 1,
      lines: 20,
      functions: 1
    }
  }
};
