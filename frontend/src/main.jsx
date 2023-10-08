import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { EmployeeProvider } from './hooks/useEmployeeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeeProvider>
    <App />
    </EmployeeProvider>
  </React.StrictMode>
  
)
