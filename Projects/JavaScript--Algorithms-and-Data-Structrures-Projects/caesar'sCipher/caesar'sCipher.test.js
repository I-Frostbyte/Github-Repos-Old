const rot13 = require("./caesar'sCipher");

test("Caesar's Cipher ", async () => {
    expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
})

test("Caesar's Cipher ", async () => {
    expect(rot13("SERR CVMMN!")).toEqual("FREE PIZZA!");
})

test("Caesar's Cipher ", async () => {
    expect(rot13("SERR YBIR?")).toEqual("FREE LOVE?");
})

test("Caesar's Cipher ", async () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
})