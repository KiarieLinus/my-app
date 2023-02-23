import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <img src={logo} className="App-logo" alt="logo" />
      <div className="List">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Power thousands of enerprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
