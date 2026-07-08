const greetTest = require("./helloWorld.ts")

test("should return hello world!", async () => {
    expect(greetTest()).toBe("hello world!");
});