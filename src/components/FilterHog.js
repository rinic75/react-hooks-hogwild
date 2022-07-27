import React from "react";

function FilterHog({dropDown, checkBox, onDropDown, onCheckBox}) {
  console.log(checkBox)
  
  return (
    <div>
      <form>
        <input type="checkbox" checked={checkBox} onChange={onCheckBox} />

        <select value={dropDown} onChange={onDropDown}>
          <option value="All">All</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select>
      </form>
   </div>
  )
}

export default FilterHog