import { useState } from "react";

function List() {
    const todo = [
        "Check this to-do",
        "Do not Check this to-do",
        "May or May not Check this to-do",
    ];
    const [todos, settodos] = useState("todo");
    const [task, setask] = useState("");

    const handlClick = () => {
        if (task.trim()) {
            settodos([...todos, task]);
            setask("");
        }
    };


    return (

        <div>
            <>
                <input placeholder="Add task here"
                    value={task}
                    onChange={e => setask(e.target.value)}
                />
                <button type="add" onClick={handlClick}>Add</button>
                <br />
            </>

            {todo.map(task => (
                <>

                    <label><input type="checkbox" name={task} value={task}></input>{task}</label>
                    < br />
                </>

            ))}


            {todos.map(task => (
                <>

                    <label><input type="checkbox" name={task} value={task}></input>{task}</label>
                    < br />
                </>

            ))}


        </div>
    );
}
export default List