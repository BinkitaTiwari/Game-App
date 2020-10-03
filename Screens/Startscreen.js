import React ,{useState}from 'react';
import {
    Text,
    StyleSheet,
    View, Button, TouchableWithoutFeedback,Keyboard,Alert
  } from 'react-native';
import Card from '../Components/card';
import Input from '../Components/Input';
import color from '../Constants/color';
import NumberContainer from '../Components/NumberContainer';

  const StartScreen =(props)=> {

    const[enteredText,setEnteredText]=useState('');
    const[Confirmed,setConfirmed]=useState(false);
    const[selectedNumber,setselectedNumber]=useState();
   
    const HandleInput=(text)=>{
      
        setEnteredText(text.replace(/[^0-9]/g, ' '))
    
    }

    const ResetInputHandler=()=>{
      setEnteredText(' ');
      setConfirmed(false);
    }

    const ConfirmInputHandler=()=>{
      const chosenNumber= parseInt(enteredText);
      if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99)
      {
        Alert.alert(
          'Invalid number!',
          'Number has to be a number between 1 and 99.',
          [{ text: 'Okay', style: 'destructive', onPress: ResetInputHandler }]
        );
        return;
      }
        
      
      setConfirmed(true);
      setEnteredText(' ');
      setselectedNumber(chosenNumber);
  
    }

    let confirmedOutput;

  if (Confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={()=>props.onstartgame(selectedNumber)} />
      </Card>
    );
            
  }
    return(
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.input}>
            <Text>Select a number</Text>
        <Input style={styles.textbox} 
        blurOnSubmit 
        keyboardType="number-pad" 
        maxLength={2}
        onChangeText={HandleInput}
        value={enteredText}/>

    <View style={styles.button}>

    <View style={styles.button1}>
      <Button title="RESET" onPress={ResetInputHandler} color={color.accent}/>
      </View>
    <View style={styles.button1}>
      <Button title="CONFIRM" onPress={ConfirmInputHandler } color={color.primary}/>
      </View>
    
    </View>
        </Card>
        {confirmedOutput}
      </View>
      
      </TouchableWithoutFeedback>
    )
  }
    
    
  const styles = StyleSheet.create({
    screen:{
      flex:1,
      padding: 10,
      alignItems:'center'
      
    },
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    button:{
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal: 10

    },
    input:{
        width: 300,
        maxWidth: '80%',
        alignItems:'center'
       

    },
    button1:{
        width: 100
    },
    textbox:{
      width:50,
      textAlign:'center'
    },
    summaryContainer: {
      marginTop: 20,
      alignItems: 'center'
    }
    
    
  });
  
  export default StartScreen;