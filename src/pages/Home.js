import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';


const Home = ({ navigation }) => {
    return (
        <View style={styles.conteiner}>
            <Image  style={styles.imagem}
                source={require('../imagens/foto.png')}
            />
            <Text style={styles.texto}>Sejam muito bem Vindos ao meu Curriculo :D {'\n'} {'\n'} {'\n'} {'\n'}</Text> 
            <Text style={styles.frase}>Aqui vou deixar umas opções de botões para que possam me conhecer um pouco melhor através deles! {'\n'} {'\n'} {'\n'} {'\n'} </Text>
            <Button  
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
            />
            <Button 
                title="Experiencia"
                onPress={ () => navigation.navigate('Experiencia') }
            />
            <Button 
                title="Dados"
                onPress={ () => navigation.navigate('Dados') }
            />
            <Button 
                title="Objetivo"
                onPress={ () => navigation.navigate('Objetivo') }
            />
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
        width: 100,
        height: 100,
      }
});

export default Home;
