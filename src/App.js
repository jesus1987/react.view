import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import MyGrid from './commponents/common/MyGrid';
import Insert from './commponents/Insert'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/mygrid" element={<MyGrid />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;