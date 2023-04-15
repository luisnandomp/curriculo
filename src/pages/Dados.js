import { StyleSheet, Text, View, Button } from 'react-native';


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
            <Button  
                title="Home "
                onPress={ () => navigation.navigate('Home') }
            />
            <Button 
                title="Experiencia"
                onPress={ () => navigation.navigate('Experiencia') }
            />
            <Button 
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre') }
            />
            <Button 
                title="Objetivo"
                onPress={ () => navigation.navigate('Objetivo') }
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

export default Dados;
