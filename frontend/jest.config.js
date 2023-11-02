const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    coveragePathIgnorePatterns: ["<rootDir>/src/util/", "<rootDir>/src/data/", "<rootDir>/src/react-helpers/"],
    resetMocks: true,
};

module.exports = createJestConfig(customJestConfig);
