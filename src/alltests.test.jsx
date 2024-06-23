import '@testing-library/dom';
import  { screen } from '@testing-library/dom';
import React from 'react';
import { render } from "@testing-library/react";
import App from "./App.jsx";
import { describe, expect, test, vi } from "vitest";
import About from './components/About/About.jsx';
import CarForm from './components/CarForm/CarForm.jsx';

describe("App()", () => {
    test("Should be able to see the initial text on screen", () => {
        const { getByText } = render(<App/>);

        expect(getByText("Bem vindo ao CRUD de HotWheels")).toBeInTheDocument()
    })

    test("Should have the navbar in the initial screen", () => {
        render(<App />);
        const element = screen.getByTestId("navbar")
    
        expect(element).toBeInTheDocument();
    })
})

describe("About()", () => {
    test("Should be able to see the initial text on screen", () => {
        const { getByText } = render(<About/>);

        expect(getByText("Esta é uma aplicação para um CRUD de carros")).toBeInTheDocument()
    })
    
    test("Should be able to render the image", () => {
        render(<About />);
        const element = screen.getByTestId("aboutimg")
    
        expect(element).toBeInTheDocument();
    })
})

describe("CarForm()", () => {
    test("Should not be able to see CarForm component on screen", () => {
        const { queryByText } = render(<App />);
    
        expect(queryByText("Submit")).toBeNull();
        });
})