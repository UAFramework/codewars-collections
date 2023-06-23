function generateShape(integer){
  let drawing = '';
  for (let i = 0; i < integer; i++) {
    drawing += '+'.repeat(integer);
    drawing += '\n';
  }
  drawing = drawing.slice(0,-1);
  return drawing;
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
  });
});