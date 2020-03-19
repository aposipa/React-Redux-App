import React from 'react';
import JokesForm from './components/JokesForm';
import JokesList from './components/JokesList';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      <JokesForm />
      <JokesList />
    </div>
   
  );
}

export default App;
