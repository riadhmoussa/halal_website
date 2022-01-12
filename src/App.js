import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/Home';

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<HomeScreen />} />
     
    </Routes>
  </BrowserRouter>
     
  );
}

export default App;
