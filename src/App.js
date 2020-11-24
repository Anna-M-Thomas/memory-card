import React, {useState} from 'react';
import fishies from './fishies'
import Scoreboard from './Scoreboard'
import Card from './Card'

function App() {
  const [allFishies, setFishies] = useState(fishies);
  const [scores, setScores] = useState({score: 0, bestScore: 0});

  const cards = allFishies.map((fish, index) => <Card handleClick={handleClick} id={fish.id} key={fish.id} data={fish}/>);

  function handleClick(event){
    console.log(event.currentTarget.dataset.id);
  }  

  return (
    <div className="App">
      <Scoreboard score={scores.score} bestScore={scores.bestScore}/>
      {cards}
    </div>
  );
}

export default App;
