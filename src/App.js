import React, {useState} from 'react';
import fishies from './fishies'
import Scoreboard from './Scoreboard'
import Card from './Card'

function App() {
  const [allFishies, setFishies] = useState(fishies);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  //Make array of Card components first, then shuffles.
  function shuffleCards(array){
      const cards = array.map((fish, index) => <Card handleClick={handleClick} index={index} key={fish.id} data={fish}/>);
      cards.sort(() => Math.random() - 0.5);
      return cards;
  }

  function handleClick(event){
//Get index of fishie, copy state array
    const i = event.currentTarget.dataset.index;
    const newArr = [...allFishies];
 //If not clicked before, new array with click to "true" for that fishie, add 1 to score
    if(newArr[i].clicked === false){
        newArr[i].clicked = true
        setScore(score + 1);
        setFishies(newArr);
      } 
//If clicked before, new array with all clicked properties reset. Set best score
//if applicable, reset current score.
      else {
        const newestArray = newArr.map(fishie => {
          fishie.clicked = false;
          return fishie;
        });
        setFishies(newestArray);
        if(score > bestScore){
          setBestScore(score);
        }
        setScore(0);
      }
  }  

//Shuffles cards for each render
  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore}/>
      {shuffleCards(allFishies)}
    </div>
  );
}

export default App;
