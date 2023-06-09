import React from 'react'
import Dashboard from "./components/Dashboard"
import { BrowserRouter } from 'react-router-dom';
import Dashboard1 from './components/Dashboard1';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Dashboard /> */}
        <Dashboard1/>
      </BrowserRouter>

    </div>
  )
}

export default App