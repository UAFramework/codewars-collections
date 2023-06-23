function match(candidate, job) {
  if (candidate.minSalary * 0.9 <= job.maxSalary) {
    return true;
  } else if (candidate.minSalary == undefined || job.maxSalary == undefined) {
    throw "Please provide the salary";
  } else {
    return false;
  }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };
    
Test.assertEquals(match(candidate1, job1), true);
Test.assertEquals(match(candidate1, job2), false);
  });
});
