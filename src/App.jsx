import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { Router } from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="form">フォーム</Link>
        <br />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
