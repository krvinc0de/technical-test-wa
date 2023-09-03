import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactUser = ({handleContact}) => {
    return (
        <TouchableOpacity
            onPress={handleContact}
            style={styles.buttonMail}
        >
            <MaterialIcons name="email" size={24} color="grey" />
            <Text style={styles.textMail}>
                Contactame
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonMail: {
        width: 130,
        height: 40,
        borderRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F0E8',
    },
    textMail: {
        fontSize: 16,
        color: 'grey',
    }
});

export default ContactUser;
