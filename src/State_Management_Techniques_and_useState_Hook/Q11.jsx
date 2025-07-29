import { useState } from "react";





function TodoApp() {
      const [task, setTask] = useState("");
      const [tasks, setTasks] = useState([]);
      function addTask() {
      if(task==""){       // chnage the if condition to avoid empty task
        return alert("invalid input") 
      }
      else {
          setTasks(tasks.concat({ task: task }));
        }
        setTask(" ");
      }
      function toggleComplete(idx) {
        const items = [...tasks];
        items[idx].done = !items[idx].done;
        setTasks(items);
      }
      function deleteTask(index) {
        const updated=tasks.slice();
        updated.splice(index ,1); //removed +1 to delete correct task
        setTasks(updated);
      }
      return (
        <div style={{ padding: "20px" }}>
          <h2>
 To-Do List</h2>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((t, i) => (
              <li key={i}>
                <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>  {/*remove function call and use ternary operator here*/}
                  {t.task}
                </span>
                <button onClick={() => deleteTask(i)}>delete</button> {/*add button text content  and call a function with specific id*/}
                <button onClick={() => toggleComplete(i)} >complated</button> {/*added button for complate the task*/}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    export default TodoApp