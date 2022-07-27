import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
  const [detail, setDetail] = useState(false)
  const [hide, setHide] = useState(false)
  function clickHandler() {
    setDetail(detail => !detail)
  }
  return (
    <div className="ui card eight wide column pigTile" onClick={clickHandler}>
      <div className="image">
        <img src={hog.image} alt="Hog Pic" />
      </div>
      <div className="content">
        <h2>{hog.name}</h2>
      </div>
      <div className="extra content">
        {detail ? <HogDetails hog={hog} /> : null}
      </div>
    </div>
  )
}

export default HogCard