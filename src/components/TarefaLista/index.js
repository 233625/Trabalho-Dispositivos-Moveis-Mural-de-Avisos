import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';

export default function TarefaLista({data}){
    return(
        <View style={styles.conteiner}>
            <TouchableOpacity>
                <Text style={styles.tarefa}>{data.tarefa}</Text>
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


}
});