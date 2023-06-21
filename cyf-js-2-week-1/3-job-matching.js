function match(candidate, job) {
  let candidateMinSalary = candidate.minSalary;
  let jobMaxSalary = job.maxSalary;
  let candidateWiggleSpace = candidateMinSalary - candidateMinSalary / 10;
  if (isNaN(candidateMinSalary) || isNaN(jobMaxSalary) || candidateMinSalary === undefined || jobMaxSalary === undefined) {
    throw "Not enough information";
  }
  else if (candidateWiggleSpace <= jobMaxSalary) {
    return true;
  } else {
    return false;
  }
}

describe("Tests", () => {
  it("test", () => {
let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 };
    
Test.assertEquals(match(candidate1, job1), true);
Test.assertEquals(match(candidate1, job2), false);
  });
});
