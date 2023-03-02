
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Settings from './Pages/Settings';

function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/settings" exact element={<Settings/>}/>
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
