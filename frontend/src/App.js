import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ToDo from './pages/ToDo';


function App() {
  return (
    <BrowserRouter>
      <ToDo />
    </BrowserRouter>
  );
}

export default App;
