import React, { useCallback, useState } from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity, Button,
   SafeAreaView, FlatList, Modal, TextInput} from 'react-native';
import  TarefaLista from './src/components/TarefaLista';

   
export default function App(){
  const [tarefa,setTarefa] = useState([]);
  const [open,setOpen] = useState(false);
  const [input, setInput] = useState('');


  function Add(){
    if(input === '')return;

    const data = {
      key: input,
      tarefa: input
    };

    setTarefa([...tarefa,data]);
    setOpen(false);
    setInput('');
  }

  const handleDelete = useCallback((data)=>{
    const find = tarefa.filter(r => r.key !== data.key);
    setTarefa(find);
  })

  return(
    //Inicio -> onde fica o titulo
    <SafeAreaView style={styles.conteiner}>
        <View>
          <Text style={styles.title}>Mural da Avisos</Text>
        </View>
       
       
        {/*Conecta com o .scr/index.js para aparece os avisos na tela  */}
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={tarefa}
        keyExtractor={(item)=> String(item.key)}
        renderItem={({item})=> <TarefaLista data={item} handleDelete={handleDelete}/>}
        />
        
        
        {/*Espaço feito para a area emm que vai criar as novas tarefas */}
        <Modal transparent={false} visible={open}>
          <SafeAreaView style={styles.conteiner}>
          
            <TouchableOpacity onPress={() => setOpen(false)} >
              <Text> Voltar </Text>
            </TouchableOpacity>

            
            <Text style={styles.title}>Novo Aviso</Text>
          
            
            
            <View style={styles.corpo}>
              <TextInput
              multiline={true}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder="Digite aqui ?"
              value={input}
              onChangeText={(texto)=> setInput(texto)}
              style={styles.input}
              />
            </View>

            

            <TouchableOpacity style={styles.corpoBtn} onPress={Add}>
              <Text style={styles.btn}>Cadastrar</Text>
            </TouchableOpacity>
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
},
corpo:{
  marginTop: 15,
},
input:{
  fontSize:15,
  marginLeft:10,
  marginRight: 10,
  marginTop: 30,
  backgroundColor:'#FFF',
  padding: 9,
  height: 85,
  textAlignVertical: 'top',
  color:'#000',
  borderRadius: 5
},
btn:{
  backgroundColor:'#00FF00',
  marginTop: 10,
  justifyContent:'center',
  textAlign: 'center',
  marginLeft: 10,
  marginRight: 10,
  height: 40,
  borderRadius: 5,
  fontSize: 20
}
});
