/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList, Button
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './Components/Header';
import GameScreen from './Screens/Gamescreen';
import StartScreen from './Screens/Startscreen';
import GameOverScreen from './Screens/GameOver';



const App =()=> {
  const[userNumber,setuserNumber]=useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setuserNumber(null);
  };

  const StartGameHandler=(selectedNumber)=>{
    setuserNumber(selectedNumber);
  }
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content=<StartScreen onstartgame={StartGameHandler}/>
  if(userNumber && guessRounds <= 0){
    content= <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }
  else if(guessRounds > 0){
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }
  return(
    <View style={styles.screen}>
      <Header title="Guess Number App"/>
      {content}
      
    </View>
  )
}
  
  
const styles = StyleSheet.create({
  screen:{
    flex:1
    
  }
  
  
});

export default App;
