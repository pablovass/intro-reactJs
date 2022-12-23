const randomString = require("../ArreglosStrings/index");

test("Probar la funcionalidad", () => {
  expect(typeof randomString()).toBe("string");
});

describe("Probar funcionalidades de ramdomStrings", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("Comprobar que no existe una ciudad", () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
