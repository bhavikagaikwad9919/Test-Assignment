import './App.css';
import { Signin } from './component/Signin';
import { Route, Routes } from 'react-router-dom';
import { RegitrationForm } from './component/RegitrationForm';
import { AddPatient } from './component/AddPatient';
import { Details } from './component/Details';
import { EditPatient } from './component/EditPatient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/RegitrationForm' element={<RegitrationForm />} />
        <Route path='/AddPatient' element={<AddPatient />} />
        <Route path='/Details' element={<Details />} />
        <Route path='/EditPatient' element={<EditPatient />} />
      </Routes>
    </div>
  );
}

export default App;
