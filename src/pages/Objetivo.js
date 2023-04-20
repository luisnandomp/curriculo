import { StyleSheet, Text, View, Button } from 'react-native';

import Botao from '../componentes/Botao';

const Objetivo = ({ navigation }) => {
    return (
        <View style={styles.conteinerr}>
            <Text style={styles.textoo}>Aqui vou contar meus objetivos! {'\n'}  {'\n'} </Text>
            <Text style={styles.texto}>Meu objetivo é ser rico, sem a necessidade de trabalhar  {'\n'}
 
            
            {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
            </Text>

            <Botao titulo="Home" acao={ () => navigation.navigate('Home') } />
            <Botao titulo="Sobre" acao={ () => navigation.navigate('Sobre') } />
            <Botao titulo="Experiencia" acao={ () => navigation.navigate('Experiencia') } />
            <Botao titulo="Dados" acao={ () => navigation.navigate('Dados') } />
        </View>
    )};

const styles = StyleSheet.create({
    conteinerr: {
        flex: 1,
        flex: 1,
        backgroundColor: '#ccc',
        flexDirection: 'column',
    },
    textoo: {
        fontSize: 50,
        textAlign: 'center',
      },
      texto: {
        fontSize: 15,
        textAlign: 'center',
      }
});

export default Objetivo;
