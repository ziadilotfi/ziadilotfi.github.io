import './App.css';
import Portfolio from './pages/Portfolio';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
