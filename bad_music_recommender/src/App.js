import './App.css';
import React, { useState } from 'react';

function App() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log("Runs");
  }


  return (
    <div className="App">
      <div className={`landingPage ${submitted ? 'slideOut' : ''}`}>
        <div className="title">
          <img id="chaotifyLogo" src="ChaotifyLogo.png" alt="Chaotify logo"></img>
          <p id="introText">
            Chaotify
          </p>
        </div>
        <form name="search" onSubmit={handleSubmit}>
          <input type="text" id="genreInput" autocomplete="off" placeholder="What artist do you want to listen to?" />
          <input type="submit" hidden />
        </form>
      </div>
      <div className="musicPlayer">

      </div>
    </div>
  );
}

export default App;
