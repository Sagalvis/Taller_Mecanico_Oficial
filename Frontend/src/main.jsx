import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/index';
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>,
)
