module.exports = {
  testEnvironment: "jsdom", // <--- agrega esto
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
};