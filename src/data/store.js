import { create } from "zustand";
import { todos } from "./data.js";
import { getToday } from "../utils/date.js";

const useStore = create((set) => ({
    todos: todos, // TODO: "todos" är data som du kan använda under utvecklingen - byt ut den mot din egen testdata

    // testTodos: [],

    todayName: getToday(),
    // TODO: du behöver en funktion setTodayName för att kunna testa appen med olika veckodagar

    // toggleTodo: (id) =>
    //     set((state) => {
    //         return {
    //             ...state,
    //             todos: state.todos.map((t) => {
    //                 if (t.id === id) {
    //                     return { done: !t.done, ...t };
    //                 } else {
    //                     return t;
    //                 }
    //             }),
    //         };
    //     }),
    // Det är möjligt att det finns en liiiiiten bug här, som man i så fall skulle upptäcka när man testar 😇
    toggleTodo: (id) =>
        set((state) => {
            console.log("store, toggleTodo", JSON.stringify(state.todos));
            const x = {
                todos: state.todos.map((t) =>
                    t.id === id ? { ...t, done: !t.done } : t
                ),
            };
            console.log("Store2", JSON.stringify(x));
            return x;
        }),

    resetTodos: () => set((state) => ({ todos: [] })),

    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((t) => t.id !== id),
        })),

    setTodos: (newTodos) => set({ todos: newTodos }),

    // TODO: lägg till en funktion "setTodos" så att du kan ändra innehållet i store från dina testfiler
}));

export { useStore };
