
import './App.css';
import Example from './Exemple';
import Footer from './footer'
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signup from './signup';
import Home from './Home';
import Login from './login';
import Chat from './Chat';
import Courbe from './courbe'

function App() {
  
  return (
    <Router>
   <Example/>
   <Routes>
   <Route path='/signup' exact element={<Signup/>} />
   <Route path='/' exact element={<Courbe name="Bitcoin1BTC"/>} />
   <Route path='/login' exact element={<Login/>} />
   <Route path='/:id' exact element={<Chat id="hafida" username="jakoum"/>} />
   </Routes>
   {/* <Footer></Footer> */}
   </Router>
  );
}

export default App;
