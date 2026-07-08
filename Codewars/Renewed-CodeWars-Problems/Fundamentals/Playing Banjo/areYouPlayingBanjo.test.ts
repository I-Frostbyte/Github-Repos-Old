const areYouPlayingBanjoTest = require("./areYouPlayingBanjo.ts")

test("Adam does not play banjo", async () => {
    expect(areYouPlayingBanjoTest('Adam')).toBe("Adam does not play banjo");
});

test("Paul does not play banjo", async () => {
    expect(areYouPlayingBanjoTest('Paul')).toBe("Paul does not play banjo");
});

test("Ringo plays banjo", async () => {
    expect(areYouPlayingBanjoTest('Ringo')).toBe("Ringo plays banjo");
});

test("bravo does not play banjo", async () => {
    expect(areYouPlayingBanjoTest('bravo')).toBe("bravo does not play banjo");
});

test("rolf plays banjo", async () => {
    expect(areYouPlayingBanjoTest('rolf')).toBe("rolf plays banjo");
});