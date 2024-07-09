import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <>Broken:</>
    <App key={'broken'} step={0.001} />
      <>Fine:</>
      <App key={'fine'} step={1} />
  </React.StrictMode>,
)
