const text = "Hola Mundo";
const fruit = ["manzana", "melon", "banana"];

test("deve contener una fruta", () => {
  expect(fruit).toContain("manzana");
});
test("should have a text", () => {
  expect(text).toMatch(/Mundo/);
});

test("mayor que ", () => {
  expect(10).toBeGreaterThan(9);
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});
