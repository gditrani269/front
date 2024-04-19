import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MiFront } from './components/MiFront'
import { MiTabla } from './components/MiTabla'
import { Home } from './Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*< MiTabla />*/}
    <Home />
  </React.StrictMode>,
)
