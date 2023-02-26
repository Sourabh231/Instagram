//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PostView from './Components/PostView'
import LandingPage from './Components/LandingPage'
import Form from './Components/Form'
function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
              <Route path='/' element={<LandingPage/>}></Route>
              <Route path='/PostView' element={<PostView/>}></Route>
              <Route path='/PostView/Form' element={<Form/>}></Route>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
