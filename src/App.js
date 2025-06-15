import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Location from './pages/Location';
import Menu from './pages/Menu';
import SignIn from './pages/SignIn';
import Form from './pages/form';



function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/location' element={<Location/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/form' element={<Form/>} />

        </Routes>
      </Router>
  );
}

export default App;
