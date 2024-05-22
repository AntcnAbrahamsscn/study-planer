// Acceptanskriterier:
// 1. Rendera komponenten
// 2. Klicka i checkbox, för att visa om den är klar eller inte
// 3. Klicka på tabort för att kunna ta bort en specifik task
// 4. Klicka på redigera för att redigera en task
// 4.1. Validera så att man inte kan spara en tom sträng som task
// 4.2 Ändra redigera till spara, för att kunna spara en

import { useStore } from '../../data/store';
import React from 'react';

const Item = ({ item }) => {
	const toggleTodo = useStore(state => state.toggleTodo);
    const deleteTodo = useStore(state => state.deleteTodo); 


    let itemClass = '';
    if (item.done) itemClass += 'done';
    if (item.late) itemClass += 'due';

    const handleChange = () => {
		toggleTodo(item.id);
    };
    const handleDelete = () => {
		deleteTodo(item.id);
    };

    return (
        <div className="item">
            <input type="checkbox" checked={item.done} onClick={handleChange} />
            <label className={itemClass} onClick={handleChange}>
                {item.text}
            </label>
            <span title="Ändra">✍️</span>
            <button onClick={handleDelete} >🗑️</  button>
        </div>
    );
};

export default Item;

