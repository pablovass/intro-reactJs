export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // Asegúrate de que apunte a este módulo
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Mueve esta opción aquí
};
