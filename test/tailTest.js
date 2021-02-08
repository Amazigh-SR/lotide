//Requiring both AssertEqual and tail functions
const tail = require("../tail");
const assert = require("chai").assert;

// --------------------------------------------------- //
describe("#tail", function() {
  it("return length of 2 for ['hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("return 'Lighthouse' as the first element from the returned array for the ['hello', 'Lighthouse', 'Labs'] case", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
  it("return 'Labs' as the second element from the returned array for the ['hello', 'Lighthouse', 'Labs'] case", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
  it("return ['Lighthouse', 'Labs'] for the ['hello', 'Lighthouse', 'Labs'] case", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  });
  it("return ['hello'] for the ['hello'] case", () => {
    assert.deepEqual(tail(["hello"]), []);
  });
  it("return [] for the [] case", () => {
    assert.deepEqual(tail([]), []);
  });
  
});




