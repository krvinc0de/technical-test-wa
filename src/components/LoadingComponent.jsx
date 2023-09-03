import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={'#EEE0C9'} size={'large'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
});

export default LoadingComponent;
