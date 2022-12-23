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

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("probar un promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

test("probar la promesa con async/wait", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});

afterEach(() => console.log("despues de cada prueba"));
afterAll(() => console.log("despues de todas las pruebas"));
beforeEach(() => console.log("antes de cada prueba"));
beforeAll(() => console.log("antes de todas pruevas"));
