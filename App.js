import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.value);
      setJokes(data.value);
    });
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://market.enonic.com/vendors/enonic/chuck-norris-widget/_/attachment/inline/1c700535-289d-4563-883f-cb8d4ec69b6a:43f4099ef34bd5fa69c7ab886d971be70cba17db/application.svg" className="Chuck-icon" alt="chuck" height={200} />

    <Card>
      {jokes}
    </Card>

    <button className='refresh' onClick={ refreshPage }>Refresh!</button>
        
      </header>
    </div>
  );
}

export default App;
