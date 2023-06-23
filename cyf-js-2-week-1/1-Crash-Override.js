function aliasGen(n, s) {
  let firstName = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "Data",
  E: "Energy",
  F: "Function",
  G: "Glitch",
  H: "Half-life",
  I: "Ice",
  J: "Java",
  K: "Keystroke",
  L: "Logic",
  M: "Malware",
  N: "Nagware",
  O: "OS",
  P: "Phishing",
  Q: "Quantum",
  R: "RAD",
  S: "Strike",
  T: "Trojan",
  U: "Ultraviolet",
  V: "Vanilla",
  W: "WiFi",
  X: "Xerox",
  Y: "Y",
  Z: "Zero"
};
    let surname = {
  A: "Analogue",
  B: "Bomb",
  C: "Catalyst",
  D: "Discharge",
  E: "Electron",
  F: "Faraday",
  G: "Gig",
  H: "Hacker",
  I: "IP",
  J: "Jabber",
  K: "Killer",
  L: "Lazer",
  M: "Mike",
  N: "n00b",
  O: "Overclock",
  P: "Payload",
  Q: "Quark",
  R: "Roy",
  S: "Spy",
  T: "T-Rex",
  U: "Unit",
  V: "Virus",
  W: "Worm",
  X: "X",
  Y: "Yob",
  Z: "Zombie"
};
  let capitalName = n.charAt(0).toUpperCase();
  let capitalSurname = s.charAt(0).toUpperCase();
  if (/^[A-Z]/.test(capitalName) && /^[A-Z]/.test(capitalSurname)) {
    return `${firstName[capitalName]} ${surname[capitalSurname]}`;
  } else {
    return "Your name must start with a letter from A - Z.";
  }
  
/* Just my first attempts
 for (let letterFirstName in firstName) {
    if (n.charAt(0).toUpperCase() === letterFirstName){
      aliasFirstName = firstName[letterFirstName];
    }
  }
  for (let letterSurname in surname) {
    if (s.charAt(0).toUpperCase() === letterSurname){
      aliasSurname = surname[letterSurname];
    }
  }
  return aliasFirstName + aliasSurname;*/
}

const Test = require('@codewars/test-compat');
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(aliasGen("Mike", "Millington"), "Malware Mike");
Test.assertEquals(aliasGen("Fahima", "Tash"), "Function T-Rex");
Test.assertEquals(aliasGen("Daisy", "Petrovic"), "Data Payload");
Test.assertEquals(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
Test.assertEquals(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");

  });
});