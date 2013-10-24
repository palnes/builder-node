function helloWorld() {
    return "Hello world!";
}

describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
    it("says world", function() {
        expect(helloWorld()).toContain("world");
    });
});

describe("Hello world 2", function() {
    it("says Justin Bieber", function() {
        expect(helloWorld()).toEqual("Justin Bieber");
    });
    it("says lo wo", function() {
        expect(helloWorld()).toContain("lo wo");
    });
});
