import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { LoginDataProvider } from './Context/LoginData';


function App() {
 
  return (
    <div>
      <LoginDataProvider>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="register" element={<Register/>} />
          <Route path="home/*"element={<Home/>}></Route>
        </Routes>
      </LoginDataProvider>
    </div>
  );
}

export default App;
