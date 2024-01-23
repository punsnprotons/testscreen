import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './components/Upload';
import SelectTimestamps from './components/SelectTimestamps';
import GenerateLink from './components/GenerateLink';
import Home from './components/Home';
import AnalyzeResults from './components/AnalyzeResults';
import ReviewScreen from './components/ReviewScreen';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload />} />
        <Route path='/selecttime' element={<SelectTimestamps />} />
        <Route path='/review' element={<ReviewScreen />} />
        <Route path='/createlink' element={<GenerateLink />} />
        <Route path='/results' element={<AnalyzeResults />} />
      </Routes>
    </Router>
  );
}

export default App;
