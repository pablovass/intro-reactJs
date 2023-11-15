const cities = ["buenos aires", "ciudad de mexico", "lima"];

const randomString = () => {
  const strings = cities[Math.floor(Math.random() * cities.length)];
  return strings;
};

module.exports = randomString;
