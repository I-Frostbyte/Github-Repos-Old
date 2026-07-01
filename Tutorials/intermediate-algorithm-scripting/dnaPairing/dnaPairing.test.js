const pairElement = require("./dnaPairing.js");

test("DNA Test Pairing", async () =>{
    expect(pairElement("GCG")).toEqual([["G", "C"], ["C","G"], ["G", "C"]]);
})

test("DNA Test Pairing", async () =>{
    expect(pairElement("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
})

test("DNA Test Pairing", async () =>{
    expect(pairElement("TTGAG")).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
})