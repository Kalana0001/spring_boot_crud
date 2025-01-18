import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { NoMatch } from './pages/NoMatch/NoMatch';
import AddUser from './pages/AddUser/AddUser';
import Home from './pages/Home/Home';
import Update from './pages/Update/Update';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NoMatch />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/updateuser/:id" element={<Update />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
