import React, { useState } from "react";
import HogCard from "./HogCard";
import hogsData from "../porkers_data";
import FilterHog from "./FilterHog";

function HogsList() {
  const [hogs, setHogs] = useState(hogsData)
  const [dropDown, setDropDown] = useState("All")
  const [checkBox, setCheckBox] = useState(false)

  function handleDropDown (e){
    setDropDown(e.target.value)
  }

  function sortedHogs() {
    if(dropDown === 'Weight'){
      return hogs.sort((hogA, hogB) => hogA.weight - hogB.weight )
    } else if (dropDown === 'Name') {
      return hogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    } else {
      return hogsData
    }
  }

  console.log(sortedHogs())

  function handleCheck (e) {
    setCheckBox(checkBox => !checkBox)
    if(e.target.checked) {
      const checkedHogs = sortedHogs().filter(hog=> hog.greased === true)
      setHogs(checkedHogs)
    } else {
    setHogs(hogsData)
    }
  }

  
        
  return (
    <div>
      <div className="Filter Hog">
        <FilterHog dropDown={dropDown} checkBox={checkBox} onDropDown={handleDropDown} onCheckBox={handleCheck}/>
      </div>
      <div className="ui three stackable cards">
        {hogs.map(hog => <HogCard key={hog.name} hog={hog} />)}
      </div>
    </div>
  )
}

export default HogsList