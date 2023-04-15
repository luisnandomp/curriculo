import { StyleSheet, Text, View, Button } from 'react-native';


const Sobre = ({ navigation }) => {
    return (
        <View style={styles.conteinerr}>
            <Text style={styles.textoo}>Sejam muito bem Vindos, Meu nome é Luis Fernando</Text>
            <Text style={styles.texto}>Eu tenho 19 anos, trabalho desde meus 17anos, começei inicialmente como auxiliar de pintor{'\n'}
            permaneci neste emprego durante 9messes, onde sai pois pararam de me pagar ;-;, inclusive tão me devendo 900conto até hoje. {'\n'}
            Logo após isso, fui convidado a trabalhar junto ao meu tio, uma imobiliaria, onde fazia todos os afazeres que precisavam, desde office boy{'\n'}
            até lavar banheiro etc... fiquei por 8messes em média também{'\n'} Somente sai pois me apareceu uma oportunidade de estágio, na empresa onde estou hoje{'\n'}
            KONVIX, uma "filial" da INTERSOLID, empresa muito renomada! estou atuando como tester (QA) ultimamente, mas tenho planos de me tornar progamador em breve!
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

export default Sobre;
