import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<EmployeeList />} />
          <Route path='/add' element={<AddEmployee/>} />
          <Route path='/update' element={<UpdateEmployee/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
