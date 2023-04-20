import { StyleSheet, Text, View, Button } from 'react-native';

import Botao from '../componentes/Botao';

const Experiencia = ({ navigation }) => {
    return (
        <View style={styles.conteinerr}>
            <Text style={styles.textoo}>Aqui vou contar minhas Experiencias! </Text>
            <Text style={styles.texto}>Aqui vou contar minhas Experiencias!  {'\n'}
 
            {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
            
            {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
            </Text>

            <Botao titulo="Home" acao={ () => navigation.navigate('Home') } />
            <Botao titulo="Sobre" acao={ () => navigation.navigate('Sobre') } />
            <Botao titulo="Dados" acao={ () => navigation.navigate('Dados') } />
            <Botao titulo="Objetivo" acao={ () => navigation.navigate('Objetivo') } />
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

export default Experiencia;
