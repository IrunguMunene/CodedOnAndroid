import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  
  const [greeting, setGreeting] = useState('');
  
  const [count, setCount] = useState(0);
  
  const handleGreetingChange = event => setGreeting(event.target.value);
  
  const handleCountIncreament = () => setTimeout(() => setCount(currentCount => currentCount + 1), 1000);
  
  const handleCountDecreament = () => setTimeout(() => setCount(currentCount => currentCount > 0 ? currentCount - 1 : 0), 1000);
  
  const sayHello = () => console.log('Hello');
  
  useEffect(() => setCount(currentCount => currentCount + 1), []);

  return (
    <div>
      <Greetings greeting = {greeting} />
      
      <Counter count= {count} />
      
      <Input value = {greeting} onChangeInput = {handleGreetingChange}>
        Set Greeting:
      </Input>
      <Button handleClick = {sayHello}>
        Testing
      </Button>
      
      <Button handleClick = {handleCountIncreament}>
        Increase Count
      </Button>
      
      <Button handleClick = {handleCountDecreament}>
        Decrease Count
      </Button>
    </div>
  );
};

const Greetings = ({greeting}) =>
  <p>{greeting}</p>;
 
const Counter = ({count}) => <p>{count}</p>;

// An abstract input component.
const Input = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input type = "text" value = {value} onChange = {onChangeInput} />
  </label>
);

// An abstract button. Assigning default value in the function signature for destructuring to override component function.
const Button = ({handleClick  = () => console.log('Default'), children}) => (
  <button type = "button" onClick = {handleClick}>
    {children}
  </button>
);

Greetings.propTypes = {
  value: PropTypes.string.isRequired,
};

export default App;
