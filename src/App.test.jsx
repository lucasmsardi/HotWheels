import '@testing-library/dom';
import React from 'react';
import { render } from "@testing-library/react";
import App from "./App.jsx";
import { describe, expect, test } from "vitest";


describe("App", () => {
    test("Should be able to see the initial text on screen", () => {
        const { getByText } = render(<App/>);

        expect(getByText("Bem vindo ao CRUD de HotWheels")).toBeInTheDocument()
    })
})
