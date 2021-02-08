const middle =  require("../middle");
const assert = require("chai").assert;


describe("#middle", function() {
  it("return [2] for the [1, 2, 3] case", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("return [2, 3] for the [1, 2, 3, 4] case", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("return [] for the [1] case", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return [] for the [] case", () => {
    assert.deepEqual(middle([]), []);
  });
  
});

