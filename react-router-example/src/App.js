import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Route path='/' commponent={Home} />
      <Route path='/profile' commponent={Profile} />
      <Route path='/about' commponent={About} />
    </BrowserRouter>
  );
}

export default App;