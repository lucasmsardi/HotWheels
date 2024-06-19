import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import carsData from "./src/carsData";

describe("Data from carsData", () => {
    test("Should have the expected length", () => {
        const expectedLength = 3;
        expect(carsData).toHaveLength(expectedLength)
    })
    test("Should have the expected car", () => {
        expect(carsData[0].nome).toEqual("Mustang")
    })

})


