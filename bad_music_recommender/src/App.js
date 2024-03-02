import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import {useState, useEffect} from "react";

const CLIENT_ID = "a8026ea34434448f8a69373f7474b6b7";
const CLIENT_SECRET = "a254a5d4bceb4e8fb8ba28142df084cd";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState("");

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  // Search
  // async req for fetches to not run over each other
  async function search(){
    console.log("Search for " + searchInput); //Tswizzle

    // get request using search to get Artist ID
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => {return data.artists.items[0].id})

    console.log("Arist ID is " + artistID);

    // with artist ID, get all albums
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbums(data.items);
      });

    // Display albums

  }

  return (
    <div className="App">
      <Container>
        <InputGroup class="mb-3" size="lg">
          <FormControl
          placeholder = "search for artist"
          type ="input"
          onKeyPress={event=>{
            if(event.key == "Enter"){
              search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
        />
        <Button onClick={search}>
          Search
        </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#"/>
            <Card.Body>
              <Card.Title>Recommendation Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
