import './App.css';
import React, { useState } from 'react';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [toggled, setToggled] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log(e.target.artist.value);
  }

  function changeButton(e) {
    e.preventDefault();
    setToggled(!toggled);
  }


  return (
    <div className="App parent">
      <div className={`audioPlayer child ${submitted ? 'slideIn' : ''}`}>
        <div className="songCover">
          <img id="songCover" src="justinbieberbaby.png" alt="Song cover"></img>
        </div>
        <div className="songInfo">
          <p id="songName">
            Baby
          </p>
          <p id="songArtist">
            Justin Bieber
          </p>
        </div>
        <div className="playBar">
          <input type="button" name="play" id="playButton" value="⏮" />
          <input type="button" name="play" id="playButton" value={`${toggled ? '⏸' : '⏵'}`} onClick={changeButton} />
          <input type="button" name="play" id="playButton" value="⏭" />
        </div>
      </div>
      <div className={`landingPage child ${submitted ? 'slideOut' : ''}`}>
        <div className="title">
          <img id="chaotifyLogo" src="ChaotifyLogo.png" alt="Chaotify logo"></img>
          <p id="introText">
            Chaotify
          </p>
        </div>
        <form name="search" onSubmit={handleSubmit}>
          <input type="text" name="artist" id="genreInput" autocomplete="off" placeholder="What artist do you want to listen to?" />
          <input type="submit" hidden />
        </form>
      </div>
    </div>
  );
}

export default App;
