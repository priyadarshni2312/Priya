import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Card title="My name is Priya" content="My age is 19. I am from Krishnagiri." />

      <Card title="My name is Darshni" content="My age is 20. I am from Coimbatore." />
   

      </header>
    </div>
  );
}

export default App;
