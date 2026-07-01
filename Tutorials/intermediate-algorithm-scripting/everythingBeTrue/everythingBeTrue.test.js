const truthCheck = require("./everythingBeTrue")

test('Truth Checks', async () => {
    expect(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")).toEqual(false);
})

test('Truth Checks', async () => {
    expect(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")).toEqual(true);
})

test('Truth Checks', async () => {
    expect(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")).toEqual(false);
})

test('Truth Checks', async () => {
    expect(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")).toEqual(true);
})