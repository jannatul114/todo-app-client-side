import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Components/Pages/Authintications/Login/Login';
import Registar from './Components/Pages/Authintications/Registar/Registar';
import Todo from './Components/Pages/Todo/Todo';
import Navbar from './Components/Shared/Nabvar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/Pages/Authintications/RequireAuth/RequireAuth';
function App() {
  return (
    <div>
      {/* <ToastContainer> */}

      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/todo' element={<RequireAuth><Todo /></RequireAuth>}></Route>
        <Route path='/registar' element={<Registar />}></Route>

      </Routes>
      {/* </ToastContainer> */}
    </div>
  );
}

export default App;
