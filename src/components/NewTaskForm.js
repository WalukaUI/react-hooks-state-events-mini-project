import React, { useState } from "react";

function NewTaskForm({options,newitemAdd}) {
  const [detals,setDetails]=useState("")
  const [newCat,setNewCat]=useState("Code")

function setdetail(e){
  setDetails(e.target.value);
}
function setNewCatego(e){
  setNewCat(e.target.value);
}
function craetenewItem(e){
e.preventDefault()
  newitemAdd({
    text:detals,
    category:newCat
  })
  setDetails("")
  setNewCat("All")
}
  const allOptions=options.map((opt)=> <option key={opt}>{opt}</option>)

  return (
    <form className="new-task-form" onSubmit={(e)=>craetenewItem(e)}>
      <label>
        Details
        <input type="text" name="text" value={detals} onChange={(e)=>setdetail(e)}/>
      </label>
      <label>
        Category
        <select name="category" value={newCat} onChange={(e)=>setNewCatego(e)}>
          {allOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
