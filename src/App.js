import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/pure/ContactComponent';
import { Contact } from './models/contactClass';

const defaultContact= new Contact("Pamela","Zambrana","email@example.com",true);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ContactComponent contact={defaultContact}></ContactComponent>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
