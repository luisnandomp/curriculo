import { StyleSheet, Text, View, Button } from 'react-native';


const Objetivo = ({ navigation }) => {
    return (
        <View style={styles.conteinerr}>
            <Text style={styles.textoo}>Aqui vou contar minhas Experiencias! </Text>
            <Text style={styles.texto}>Aqui vou contar minhas Experiencias!  {'\n'}
 
            {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
            
            {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
            </Text>
            <Button  
                title="Home"
                onPress={ () => navigation.navigate('Home') }
            />
            <Button 
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
            />
            <Button 
                title="Dados"
                onPress={ () => navigation.navigate('Dados') }
            />
            <Button 
                title="Experiencia"
                onPress={ () => navigation.navigate('Experiencia') }
            />

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
