import React, { Component } from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView} from 'react-native';

class App extends Component{
  aperte(){
    alert("Ta funcionando!!!!!");
  }
  
  render(){
    return(
      <SafeAreaView style={styles.conteiner}>
          <View>
            <Text style={styles.title}>Mural da Avisos</Text>
          </View>
          
          <TouchableOpacity style={styles.botao}>
            <Button
            style={styles.btnText}
            color='#00FF00'
            title="+"
            onPress={this.aperte}
            />
          </TouchableOpacity>

        
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
conteiner:{
flex: 1,
backgroundColor:'#35AAFF',
},
title:{
fontSize: 25,
fontStyle: 'italic',
textAlign:'center',
marginTop: 10,
},
botao:{
  position:'absolute',
  width:60,
  height:60,
  right: 10,
  bottom: 25,
  top:545,
  zIndex:9,
}
});

export default App;