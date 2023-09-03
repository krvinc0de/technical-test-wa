import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { Easing, ZoomIn } from 'react-native-reanimated';

const CardUser = ({userData}) => {

    return (
        <Animated.View
            entering={ZoomIn.duration(300).easing(Easing.ease).springify()}
            style={styles.containerCardUser}>
            <View style={styles.cardUser}>
                <View style={styles.containerImage}>
                    <Image
                        resizeMode='cover'
                        source={{uri: userData.avatar}}
                        style={styles.imageStyle}
                    />  
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.textName}>
                        {userData.first_name + ' ' + userData.last_name}
                    </Text>
                    <Text style={styles.textName}>
                        {userData.email}
                    </Text>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    containerCardUser: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardUser: {
        width: '80%',
        height: 250,
        borderRadius: 10,
        backgroundColor: '#F1F0E8',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerImage: {
        width: '100%',
        position: 'absolute',
        top: -30,
        left: '50%',
        transform: [{ translateX: -100 }]
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#FFF',
    },
    containerName: {
        width: '100%',
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textName: {
        fontSize: 20,
        color: 'grey',
        fontWeight: '400'
    },
});

export default CardUser;
