import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MainHeader = () => {
    return (
        <View style={{backgroundColor: '#FFF'}}>
            <Text style={styles.textHeader}>
                Lista de usuarios
            </Text>
            <Text style={[styles.textHeader, { fontSize: 14, fontWeight: '400' }]}>
                Lista de usuarios registrados en WineAdvisor
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        color: '#000',
        fontSize: 30,
        fontWeight: '500',
        paddingHorizontal: 10,
    }
});

export default MainHeader;
