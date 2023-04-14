import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


const Home = ({ navigation }) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.texto}>Sejam muito bem Vindos ao meu Curriculo :D</Text>

            <Button 
                title="Home"
                onPress={ () => navigation.navigate('Home') }
            />
            <Button 
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
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
      }
});

export default Home;
