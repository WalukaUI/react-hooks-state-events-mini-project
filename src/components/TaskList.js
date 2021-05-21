import React from "react";
import Task from "./Task"

function TaskList({task,deleteTask}) {
  


  const populateTasks=task.map((e)=>{
    return <Task 
    key={e.text}
    text={e.text}
    category={e.category}
    deleteTask={deleteTask}
    />
  })

  return (
    <div className="tasks">
      {populateTasks}
    </div>
  );
}

export default TaskList;
