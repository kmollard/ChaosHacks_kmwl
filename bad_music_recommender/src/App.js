import './App.css';

function App() {
  return (
    <div className="App">
      <div className="landingPage">
        <p id="introText">
          Music Recommender
        </p>
        <input type="text" id="genreInput" autocomplete="off" placeholder="What's your favourite artist?"></input>
      </div>
    </div>
  );
}

export default App;
