import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Authintications/Login/Login';
import Todo from './Components/Pages/Todo/Todo';
import Navbar from './Components/Shared/Nabvar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/todo' element={<Todo />}></Route>

      </Routes>
    </div>
  );
}

export default App;
