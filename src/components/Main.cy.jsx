import React from "react";
import Main from "./Main";
import { useStore } from "../data/store";

describe("<Main />", () => {
    beforeEach(() => {
        cy.viewport(1000, 660);
    });

    it("renders the Main component", () => {
        cy.mount(<Main />);
        cy.get("main").should("exist");
        cy.get(".day-view").should("exist");
    });

    it("renders with todos, ignoring if date is not correct", () => {
        const testTodos = [
            { id: 1, text: "Task 6", done: false, late: false, day: "mo" },
            { id: 2, text: "Task 1", done: false, late: false, day: "fr" },
            { id: 3, text: "Task fail", done: false, late: false, day: "xx" },
        ];

        useStore.setState({ todos: testTodos });

        cy.mount(<Main />);
    });

    it("toggles todo item when checkbox is clicked", () => {
        const testTodos = [
            { id: 1, text: "Task 1", done: false, late: false, day: "mo" },
        ];

        useStore.setState({ todos: testTodos });

        cy.mount(<Main />);

        cy.get('input[type="checkbox"]').should("not.be.checked").click();
        cy.get('input[type="checkbox"]').should("be.checked");
    });

    it("deletes a todo item when delete button is clicked", () => {
        const testTodos = [
            { id: 1, text: "Task 1", done: false, late: false, day: "mo" },
        ];

        useStore.setState({ todos: testTodos });

        cy.mount(<Main />);

        cy.get("button").contains("🗑️").should("be.visible").click();
        cy.get(".item").should("not.exist");
    });

    // it("validates that a task cannot be saved as an empty string", () => {
    //     // Add a task with empty string and ensure it's not saved or rendered
    //     const testTodos = [
    //         { id: 1, text: "", done: false, late: false, day: "mo" },
    //     ];

    //     useStore.setState({ todos: testTodos });

    //     cy.mount(<Main />);

    //     cy.get(".item").should("not.exist"); // Assuming your app doesn't render empty tasks
    // });

    it("edits a task", () => {
        const testTodos = [
            { id: 1, text: "Task 1", done: false, late: false, day: "mo" },
        ];

        useStore.setState({ todos: testTodos });

        cy.mount(<Main />);

        cy.get('span[title="Ändra"]').click();
        cy.get('input[type="text"]').clear().type("Updated Task 1{enter}");
        cy.get(".item label").should("contain", "Updated Task 1");
    });
});
