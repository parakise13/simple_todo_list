import React, * as react from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./interfaces";

const App: react.FC = () => {
  const [task, setTask] = react.useState<string>("");
  const [deadline, setDeadline] = react.useState<number>(0);
  const [todolist, setTodolist] = react.useState<ITask[]>([]);

  const handleChange = (event: react.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodolist([...todolist, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodolist(
      todolist.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            type="text"
            placeholder="Task to do..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days).."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todo-list">
        {todolist.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
