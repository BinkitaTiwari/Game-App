import React from 'react';
import {
    Text,
    StyleSheet,
    View,TextInput, Button, ImagePropTypes
  } from 'react-native';

  const  Card=(props)=>{
      return(
            <View style={{...styles.card, ...props.style}}>
                {props.children}
            </View>
      )
  }
  const styles = StyleSheet.create({
      card:{
        shadowColor:'black',
        shadowOffset:{width:0,height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.6,
        backgroundColor: 'white',
        elevation: 8,
        padding: 20,
        borderRadius: 20
      }

  })
    

  export default Card;