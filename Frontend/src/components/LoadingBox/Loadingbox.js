import React from 'react'
import Spinner from "react-bootstrap/Spinner"

function Loadingbox() {
  return (
   <Spinner animation="border" role="status">
       <span className="visually-hidden">
           Loading...

       </span>

   </Spinner>
  )
}

export default Loadingbox

// 3:17:23