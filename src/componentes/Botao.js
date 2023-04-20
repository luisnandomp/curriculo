import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const Botao = ({ titulo, acao}) => {
    return (
        <TouchableOpacity style={styles.botao} onPress={ acao }>
            <Text style={styles.texto}> { titulo } </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        fontSize: 30,
        backgroundColor: '#ccc',
    }
});

export default Botao;