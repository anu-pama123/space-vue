import {BrowserRouter, Routes, Route} from 'react-router-dom';

// componets
import Login from './Pages/Login/login';
import Navigation from './Navigation/navigation';

// style
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Navigation></Navigation>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
