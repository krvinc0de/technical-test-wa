import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PageSelector = () => {
    return (
        <View style={styles.paginationContainer}>
            <Text>
                Hola
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 70
    }
});

export default PageSelector;
