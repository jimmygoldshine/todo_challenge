var assert = {
  isTrue: function(testName, assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Error: Assertion Failed: " + testName + " is not truthy");
    } else {
      console.log("Test Passed: " + testName);
    }
  }
};
