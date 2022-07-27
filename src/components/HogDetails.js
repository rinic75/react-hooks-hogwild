import React from "react";

function HogDetails({hog}) {
  const {specialty, greased, weight, "highest medal achieved": medal} = hog
  return(
    <div className="description">
      <p>Specialty : {specialty}</p>
      <p>{greased? "Greased" : "Nongereased"}</p>
      <p> Highest medal achieved : {medal}</p>
      <p>Weight : {weight}</p>
    </div>
  )
}

export default HogDetails