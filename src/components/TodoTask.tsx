import React from "react";
import { ITask } from "../interfaces";

interface TodoTaskProps {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: TodoTaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>Todo: {task.taskName}</span>
        <span>Deadline: {task.deadline} days</span>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
