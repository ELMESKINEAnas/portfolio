import Header from './components/Header'
// import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        
      <Header></Header>
      {/* <Home /> */}
      </Router>
    </div>
  );
}

export default App;
