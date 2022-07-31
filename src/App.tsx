import { Routes, Route } from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Skills} from './pages/Skills'
import {Experience} from './pages/Experience'
import {Education} from './pages/Education'
import {Contacts} from './pages/Contacts'

import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;




