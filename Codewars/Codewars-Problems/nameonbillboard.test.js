const billboard = require('./nameonbillboard');

    test("Name: Jeong-Ho Aristotelis should cost 600", async () => {
        expect(billboard("Jeong-Ho Aristotelis")).toBe(600);
    });
    test("Name: Hadufuns John at 20 pounds should cost 260", async () => {
        expect(billboard("Hadufuns John", 20)).toBe(260);
    });
    test("Name: Xavier Woods Byrce-Wood at 40 pounds should cost 920", async () => {
        expect(billboard("Xavier Woods Byrce-Wood", 40)).toBe(920);
    });
    