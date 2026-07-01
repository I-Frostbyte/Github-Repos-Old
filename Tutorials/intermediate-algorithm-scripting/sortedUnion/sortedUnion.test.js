const uniteUnique = require("./sortedUnion");

test("Sort the united Arrays", async () =>{
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
})

test("Sort the united Arrays", async () =>{
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
})

test("Sort the united Arrays", async () =>{
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
})