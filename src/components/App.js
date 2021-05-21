import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [itemCategory, setitemCategory] = useState("All")

 function newItem(newObject){
   setTasks([...tasks,newObject])
 }
 function deleteopt(text){
  const newArray=tasks.filter((e)=>e.text!==text)
  setTasks(newArray)

}
  const setFilter = tasks.filter((item) =>
    itemCategory === "All" || item.category === itemCategory
  )



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryies={CATEGORIES} btnFilter={setitemCategory} selectedCat={itemCategory}/>
      <NewTaskForm  options={CATEGORIES.filter((c)=>c!=="All")} newitemAdd={newItem}/>
      <TaskList task={setFilter} deleteTask={deleteopt}/>
    </div>
  );
}

export default App;
