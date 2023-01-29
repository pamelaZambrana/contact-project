import logo from './logo.svg';
import './App.css';
import ContactComponent from './components/pure/ContactComponent';
import { Contact } from './models/contactClass';
import ContactList from './components/containers/ContactList';

const defaultContact= new Contact("Pamela","Zambrana","email@example.com",true);
function App() {
  return (
    <div className="App">
      <ContactList></ContactList>
    </div>
  );
}

export default App;
