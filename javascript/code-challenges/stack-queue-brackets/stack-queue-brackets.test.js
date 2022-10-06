const Checker = require("./stack-queue-brackets");

describe("Bracket Checker", () => {
  test("should check for brackets", () => {
    const checker = new Checker();
    expect(checker.check("{}")).toBeTruthy();
    expect(checker.check("{}(){}")).toBeTruthy();
    expect(checker.check("()[[Extra Characters]]")).toBeTruthy();
    expect(checker.check("(){}[[]]")).toBeTruthy();
    expect(checker.check("{}{Code}[Fellows](())")).toBeTruthy();
    expect(checker.check("[({}]")).toBeFalsy();
    expect(checker.check("(](")).toBeFalsy();
    expect(checker.check("{(})")).toBeFalsy();
  });
});
