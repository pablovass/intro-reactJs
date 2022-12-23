const randomString = require("../ArreglosStrings/index");

test("Probar la funcionalidad", () => {
  expect(typeof randomString()).toBe("string");
});
