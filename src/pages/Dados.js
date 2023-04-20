import { StyleSheet, Text, View, Button } from 'react-native';

import Botao from '../componentes/Botao';

const Dados = ({ navigation }) => {
    return (
        <View style={styles.conteinerr}>
            <Text style={styles.textoo}>Aqui estão meus dados!</Text>
            <Text style={styles.texto}>Nome:Luis Fernando {'\n'}
            Idade:quase 20 {'\n'}
            E-mail:luisnando.marques2107@gmail.com {'\n'}
            Celular:(18) 988010809 {'\n'}
            Endereço:Manoel Cardoso de Farias, 400   {'\n'}

            {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} 
            </Text> 

            <Botao titulo="Home" acao={ () => navigation.navigate('Home') } />
            <Botao titulo="Sobre" acao={ () => navigation.navigate('Sobre') } />
            <Botao titulo="Experiencia" acao={ () => navigation.navigate('Experiencia') } />
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

export default Dados;
