import React from 'react'
import Alert from "react-bootstrap/Alert"

function MessageBox(props) {
  return (
    <div>
        <Alert variant={props.variant || "info"} >
      {props.children}
   </Alert>
    </div>
  )
}

export default MessageBox