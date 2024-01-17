import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './components/Upload';
import SelectTimestamps from './components/SelectTimestamps';
import CreateForm from './components/CreateForm';
import GenerateLink from './components/GenerateLink';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload />} />
        <Route path='/selecttime' element={<SelectTimestamps />} />
        <Route path='/createform' element={<CreateForm />} />
        <Route path='/createlink' element={<GenerateLink />} />
      </Routes>
    </Router>
  );
}

export default App;
