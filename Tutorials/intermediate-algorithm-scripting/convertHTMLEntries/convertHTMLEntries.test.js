const convertHTML = require("./convertHTMLEntries")

test('Conveting Javascript to HTML Entries', async () => {
    expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &amp; Gabbana");
})

test('Conveting Javascript to HTML Entries', async () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &lt; Pizza &lt; Tacos");
})

test('Conveting Javascript to HTML Entries', async () => {
    expect(convertHTML("Sixty > twelve")).toEqual("Sixty &gt; twelve");
})