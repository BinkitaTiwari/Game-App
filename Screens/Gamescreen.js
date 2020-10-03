import React ,{useState,useRef,useEffect}from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/card';

const RandomNumberBetween=(max,min,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
   const  RandomNum=Math.floor(Math.random()*(max-min))+ min;
    if(RandomNum===exclude){
        return RandomNumberBetween(max,min,exclude);
    }
    else{
        return RandomNum;
    }
}

const GameScreen=(props)=>{
const [currentGuess,setcurrentGuess]=useState(RandomNumberBetween(1,100,props.userChoice));
const currentLow = useRef(1);
const currentHigh = useRef(100);
const [rounds, setRounds] = useState(0);

//const{userChoice,onGameOver}=props;


useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess,props.userChoice,props.onGameOver]);

const nextGuessHandler=(direction)=>{
    if((direction==='lower'&& currentGuess<props.userChoice) ||(direction==='greater'&& currentGuess>props.userChoice))
    {
        Alert.alert('Don\'t lie !!','You know that this is wrong...',[{text:'sorry',style:'cancel'}]);
        return;
    }
    
    if (direction === 'lower') {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }
      const nextNumber= RandomNumberBetween(currentLow.current,currentHigh.current,currentGuess);
      setcurrentGuess(nextNumber);
      setRounds(curRounds => curRounds + 1);

}
return(
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}/>
            <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}/>
        </Card>
    </View>
)
    
}

const styles= StyleSheet.create({
    screen:
    {
        flex: 1,
        padding: 10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
        width:300,
        maxWidth:'80%'
    }
})

export default GameScreen;