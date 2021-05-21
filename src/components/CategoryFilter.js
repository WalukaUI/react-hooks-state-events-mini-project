import React from "react";

function CategoryFilter({ categoryies, btnFilter,selectedCat }) {
  
  const catFilter = categoryies.map((e) => {
    const classname= e===selectedCat? "selected":null
    return <button name={e} className={classname} onClick={() => btnFilter(e)} key={e}>{e}</button>
  })



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catFilter}
    </div>
  );
}

export default CategoryFilter;
