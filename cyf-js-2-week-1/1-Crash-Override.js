function aliasGen(name, surmane) {
  return firstName[name[0].toUpperCase()] !== undefined &&
    surname[surmane[0].toUpperCase()] !== undefined
    ? firstName[name[0].toUpperCase()] + " " + surname[surmane[0].toUpperCase()]
    : "Your name must start with a letter from A - Z.";
}

console.log(firstName);

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(aliasGen("Mike", "Millington"), "Malware Mike");
    Test.assertEquals(aliasGen("Fahima", "Tash"), "Function T-Rex");
    Test.assertEquals(aliasGen("Daisy", "Petrovic"), "Data Payload");
    Test.assertEquals(
      aliasGen("7393424", "Anumbha"),
      "Your name must start with a letter from A - Z."
    );
    Test.assertEquals(
      aliasGen("Anuddanumbha", "23200"),
      "Your name must start with a letter from A - Z."
    );
  });
});

// npm test -- ./cyf-js-2-week-1/1-Crash-Override.js
