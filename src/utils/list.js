// 1. Funktionen ska returnera en array med fem arrayer, en för varje veckodag
// 1.2. Todos ska sorteras i rätt dag, även om det finns flera på en och samma
// 2. Den ska retuerna en tom array om det inte finns några tasks för en dag
// 3. Om tasksen inte har korrekta veckodagar ska den ignoreras 

// TODO: write unit tests for this function, and finish it
function splitTodosIntoDays(todos) {
    const daysOfWeek = ['mo', 'ti', 'on', 'to', 'fr'];
    const result = daysOfWeek.map(day => todos.filter(t => t.day === day));
    return result;
}

// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

export { splitTodosIntoDays }
