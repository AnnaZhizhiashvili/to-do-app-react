import { useState } from 'react';

export default function ToDoList() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState(["Walk a dog", "Buy groceries", "Read a book"]);

    function handleNewItem(event) {
        setNewItem(event.target.value);
    }

    function addToDoItem() {
        if(newItem.trim() !== "") {
            setItems((tasks) => [...tasks, newItem]);
            setNewItem("");
        }
    }

    function removeToDoItem(index) {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);

    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...items];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setItems(updatedTasks);
        }

    }

    function moveTaskDown(index) {
        if (index < items.length - 1) {
            const updatedTasks = [...items];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setItems(updatedTasks);
        }

    }



    return (
        <div className="to-do-list-wrapper">
            <h1>To-Do List:</h1>

            <div className="create-list-item">
                <input value={newItem} onChange={handleNewItem} type="text" placeholder="Enter a new task"></input>
                <button onClick={addToDoItem}>Add</button>
            </div>

            <div className="list-items">
                <ol>
                    {items.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                            <button className="delete" onClick={() => removeToDoItem(index)}>Remove</button>
                            <button className="move-up" onClick={() => moveTaskUp(index)}>Move up!</button>
                            <button className="move-up" onClick={() => moveTaskDown(index)}>Move down!</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}