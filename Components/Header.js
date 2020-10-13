import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Header=(props)=>{
    return(
        <View style={styles.Header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header:{
      padding: 30,
      backgroundColor: '#f7287b',
      width:'100%',
      height: 90,
      alignItems:'center',
      justifyContent: 'center'
      
    },
    title:{
        fontSize: 18,
        color:'black',
        fontFamily:'OpenSans-Bold'
    }
    
    
  });

export default Header;
