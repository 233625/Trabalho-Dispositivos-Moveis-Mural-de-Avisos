import React, { useState } from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity, Button,
   SafeAreaView, FlatList, Modal} from 'react-native';
import  TarefaLista from './src/components/TarefaLista';

   
export default function App(){
  const [tarefa,setTarefa] = useState([
    {key:1, tarefa: 'Comprar mingau'},
    {key:2, tarefa: 'Comprar Papel'},
    {key:3, tarefa: 'Comprar Bial'}
   ]);

   const [open,setOpen] = useState(false);
  return(
    //Inicio -> onde fica o titulo
    <SafeAreaView style={styles.conteiner}>
        <View>
          <Text style={styles.title}>Mural da Avisos</Text>
        </View>

        <FlatList
        showsHorizontalScrollIndicator={false}
        data={tarefa}
        keyExtractor={(item)=> String(item.key)}
        renderItem={({item})=> <TarefaLista data={item}/>}
        />

        <Modal transparent={false} visible={open}>
          <SafeAreaView>
            <Text>Modal 1221212</Text>
          </SafeAreaView>
        </Modal>
        
        {/*Inicio dos comandos para o botão lateral */}
        <TouchableOpacity style={styles.botao}>
          <Button
          style={styles.btnText}
          color='#00FF00'
          title="+"
          onPress={() => setOpen(true)}
          />
        </TouchableOpacity>

      
    </SafeAreaView>
    
  );
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
