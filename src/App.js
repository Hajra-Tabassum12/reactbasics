
import './App.css';
import Login from './components/login';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='nav' element={<Navigation/>}/>
     </Routes>
    </div>
  );
}

export default App;
