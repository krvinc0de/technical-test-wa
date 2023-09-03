import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const TotalPages = () => {

    const { page, totalPage } = useSelector(state => state.pagination);

    return (
        <View style={styles.container}>
            <Text style={styles.textPages}>Página {page} de {totalPage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
    },
    textPages: {
        fontSize: 12,
        color: 'grey',
        fontWeight: '400'
    }
});

export default TotalPages;
