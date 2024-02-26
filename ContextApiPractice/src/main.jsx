import React from "react";

import ReactDOM from 'react-dom'

import {App} from './App'

const root = ReactDOM.createRoot(document.getElementById("root"))

const name = "shiv"
root.render(
  <>
  
 <App value={name}></App>
 {/* <App></App> */}
 </>
)