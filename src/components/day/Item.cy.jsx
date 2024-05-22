import React from "react";
import Item from "./Item";
import { useStore } from "../../data/store";

describe("<Item />", () => {
    // 1. Rendera komponenten
    // it("renders with props", () => {
    //     const item = {
    //         id: 1,
    //         text: "T3st",
    //         done: false,
    //         late: false,
    //     };

    //     cy.mount(<Item item={item} />);
    //     cy.get("label").contains("T3st");
    // });

    // 2. Klicka i checkbox, för att visa om den är klar eller inte
    it("toggles todo item when checkbox is clicked", () => {
        const testItem = { id: 1, text: "teeeest", done: false, late: false };

        useStore.setState({
            todos: [testItem],
        });

        cy.mount(<Item item={testItem} />);

        cy.get('input[type="checkbox"]').should("not.be.checked");
        cy.get("label").click();
        cy.get('input[type="checkbox"]').should("be.checked");
    });

    // it("renders delete button", () => {
    //     const testItem = {
    //         id: 1,
    //         day: "mo",
    //         done: true,
    //         late: false,
    //         text: "Göra klart inlämning",
    //     };

    //     useStore.setState({
    //         todos: testItem,
    //     });

    //     cy.mount(<Item item={testItem} />);

    //     cy.get("button").contains("🗑️").should("be.visible").click();
    //     cy.get(".item").should("not.exist");
    // });
});
