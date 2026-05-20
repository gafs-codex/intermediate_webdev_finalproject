const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src');

describe("calculateSimpleInterest", () => {

    it("should calculate simple interest correctly", () => {
        expect(calculateSimpleInterest(1000, 5, 1)).toBe(50);
    });

    it("should return 0 when rate is 0", () => {
        expect(calculateSimpleInterest(1000, 0, 1)).toBe(0);
    });

    it("should return 0 when time is 0", () => {
        expect(calculateSimpleInterest(1000, 5, 0)).toBe(0);
    });

    it("should handle large numbers correctly", () => {
        expect(calculateSimpleInterest(10000, 10, 2)).toBe(2000);
    });

});

describe("calculateTotalPayableAmount", () => {

    it("should add principal and interest correctly", () => {
        expect(calculateTotalPayableAmount(1000, 50)).toBe(1050);
    });

    it("should return principal when interest is 0", () => {
        expect(calculateTotalPayableAmount(1000, 0)).toBe(1000);
    });

    it("should handle large amounts correctly", () => {
        expect(calculateTotalPayableAmount(10000, 2000)).toBe(12000);
    });

});