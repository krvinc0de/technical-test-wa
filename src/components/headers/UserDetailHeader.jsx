import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const UserDetailHeader = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack()
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={[styles.centerContent, {width: '100%', height: '100%'}]}
                    >
                        <Ionicons name="chevron-back-outline" size={35} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.centerContent,{ flex: 5 }]}>
                    <Text style={styles.textTitle}>Detalles del usuario</Text>
                </View>
                <View style={[styles.centerContent,{ flex: 1 }]}>
                    {/** 
                     * Libre para algun otro icono o funcion. Complementa el grid
                     */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 60,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    textTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500'
    }
});

export default UserDetailHeader;
