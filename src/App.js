import React, {useState} from 'react';
import './App.css';

const App = () => {
  return <Greetings />
};

const Greetings = () => {
  const [greeting, setGreeting] = useState('');
  
  const handleGreetingChange = event => setGreeting(event.target.value);
  
  return(
    <div>
      <p>{greeting}</p>
      
      <input
        type = "text"
        value = {greeting}
        onChange = {handleGreetingChange}
      />
      
    </div>
  );
};

export default App;
