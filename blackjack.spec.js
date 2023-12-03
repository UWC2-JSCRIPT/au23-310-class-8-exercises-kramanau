describe("Tests function: dealerShouldDraw for Blackjack game", () => {
    it("drawing 10, 9 should be false", () => {
        const hand = [
            { displayVal: "Ten", val: 10, suits: "hearts"},
            { displayVal: "Nine", val: 9, suits: "hearts"}
        ];

        const result = dealerShouldDraw(hand);
        expect(result).toEqual(false);
    })

    it("drawing Ace, 6 should be true", () => {
        const hand = [
            { displayVal: "Ace", val: 1, suits: "hearts"},
            { displayVal: "Six", val: 6, suits: "hearts"}
        ]

        const result = dealerShouldDraw(hand);
        expect(result).toEqual(true);
    })

    it("drawing 10, 6, Ace should be false", () => {
        const hand = [
            { displayVal: "Ten", val: 10, suits: "hearts"},
            { displayVal: "Six", val: 6, suits: "hearts"},
            { displayVal: "Ace", val: 1, suits: "hearts"}
        ]

        const result = dealerShouldDraw(hand);
        expect(result).toEqual(false);
    })

    it("drawing 2, 4, 2, 5 should be true", () => {
        const hand = [
            { displayVal: "Two", val: 2, suits: "hearts"},
            { displayVal: "Four", val: 4, suits: "hearts"},
            { displayVal: "Two", val: 2, suits: "hearts"},
            { displayVal: "Five", val: 5, suits: "hearts"},
        ]

        const result = dealerShouldDraw(hand);
        expect(result).toEqual(true);
    })

});