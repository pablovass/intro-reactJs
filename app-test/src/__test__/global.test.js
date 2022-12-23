const text = "Hola Mundo";

test("should have a text", () => {
  expect(text).toMatch(/Mundo/);
});
