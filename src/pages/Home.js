import { StyleSheet, Text, View, Image } from 'react-native';

import Botao from '../componentes/Botao';

const Home = ({ navigation }) => {
    return (
        <View style={styles.conteiner}>
            <Image  style={styles.imagem}
                source={require('../imagens/foto.png')}
            />
            <Text style={styles.texto}>Sejam Muito Bem Vindos ao meu Curriculo :D {'\n'}  {'\n'}</Text> 
            <Text style={styles.frase}>Aqui vou deixar umas opções de botões para que possam me conhecer um pouco melhor através deles! </Text>
            
            <Botao titulo="Sobre" acao={ () => navigation.navigate('Sobre') } />

            <Botao titulo="Experiencia" acao={ () => navigation.navigate('Experiencia') } />

            <Botao titulo="Dados" acao={ () => navigation.navigate('Dados') } />

            <Botao titulo="Objetivo" acao={ () => navigation.navigate('Objetivo') } />
        </View>
    )};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#ccc',
        flexDirection: 'column',
    },
    texto: {
        fontSize: 50,
        textAlign: 'center',
      },
      frase: {
        fontSize: 25,
        textAlign: 'center',
      },
      imagem: {
        marginLeft: 200,
        padding: 10,
        width: 100,
        height: 150,
      }
});

export default Home;
