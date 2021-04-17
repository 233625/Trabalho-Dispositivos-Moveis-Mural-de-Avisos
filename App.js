import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.conteiner}>
      <Text style={styles.title}>Mural de Avisos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
conteiner:{
  flex: 1,
  backgroundColor:'#35AAFF',
},
title:{
  fontSize: 25,
  fontStyle: 'italic'
}
});

export default App;