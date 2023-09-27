const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    coveragePathIgnorePatterns: ["<rootDir>/src/react-state-management/*", "<rootDir>/src/util/"],
    resetMocks: true,
};

module.exports = createJestConfig(customJestConfig);
