import { Routes, Route } from "react-router-dom";
import {Main, Login, Register} from './components'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <h1>Salom</h1>
    </div>
  );
}

export default App;
