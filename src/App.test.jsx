import '@testing-library/dom';
import  { screen } from '@testing-library/dom';
import React from 'react';
import { getByTestId, render } from "@testing-library/react";
import App from "./App.jsx";
import { describe, expect, test } from "vitest";


describe("App", () => {
    test("Should be able to see the initial text on screen", () => {
        const { getByText } = render(<App/>);

        expect(getByText("Bem vindo ao CRUD de HotWheels")).toBeInTheDocument()
    })

    test("Should have the navbar in the initial screen", () => {
        render(<App />);
        const element = screen.getByTestId("navbar")
    
        expect(element).toBeInTheDocument();
    })

    test("Should not be able to see CarForm component on screen", () => {
    const { queryByText } = render(<App />);

    expect(queryByText("Submit")).toBeNull();
    });
})
