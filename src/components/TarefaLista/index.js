import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';


export default function TarefaLista({data, handleDelete, handleUpdate}){
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.navegar}>
                <Text style={styles.tarefa}>{data.tarefa}</Text>
                
                <TouchableOpacity >
                    <Text style={styles.excluir} onPress={() =>handleDelete(data)}>excluir</Text>
                
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.editar} onPress={() => handleUpdate(data)}>editar</Text>
                </TouchableOpacity>
            </TouchableOpacity>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
conteiner:{
flex:1,
margin:8,
flexDirection:'row',
alignItems:'center',
backgroundColor:'#FFF',
borderRadius: 5,
padding: 7,
elevation: 5,
shadowColor:'#000',
shadowOpacity:0.2,
shadowOffset:{
    width:1,
    height:3
}
},
tarefa:{
    color:'#121212',
    fontSize: 16,
    paddingLeft:10,
    flex: 1
},
excluir:{
    color:'#ff1a1a',
    marginTop: 15,
    position:'relative'
},
editar:{
    color:'orange',
    marginTop: 15,
    left: 4,
    position:'relative'
},
navegar:{
    flexDirection:'row'
}
});