import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { NoMatch } from './pages/NoMatch/NoMatch';
import AddUser from './pages/AddUser/AddUser';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NoMatch />} />
                <Route path="/adduser" element={<AddUser />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
