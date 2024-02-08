import { sum } from "../components/Sum"

test("Calculate sum of two nums", () => {
    const res = sum(3, 4);

    expect(res).toBe(7);
})