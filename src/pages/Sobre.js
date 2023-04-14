import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';


const Sobre = ({ navigation }) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.texto}>Sejam muito bem Vindos 0</Text>

        </View>
    )};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#ccc',
        marginLeft: '650px',
        flexDirection: 'center',
        alignItems: 'Center',
        justifyContent: 'Center',
    },
    texto: {
        textAlign: 'center',
        alignContent: 'column',
        alignItems: 'column',
        textAlign: 'column',
        fontSize: 50,
      }
});

export default Sobre;
