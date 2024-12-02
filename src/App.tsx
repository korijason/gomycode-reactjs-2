// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import './App.css';
import PlayersList from './Playerlist';

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
