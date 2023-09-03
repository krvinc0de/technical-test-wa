import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moreInfoUser } from '../types/textTypes';
import Animated, { Easing, FadeInLeft } from 'react-native-reanimated';

const AboutUser = ({userData}) => {
    return (
        <Animated.View
            entering={FadeInLeft.duration(300).easing(Easing.ease).springify()}
        >
            <View>
                <Text style={styles.textName}>
                    Mas acerca de {userData.first_name + ' ' + userData.last_name}
                </Text>
                <Text style={styles.textLorem}>
                    {moreInfoUser.data}
                </Text>
            </View>
            <View>
                <Text style={styles.textName}>
                    Acerca de mi trabajo
                </Text>
                <Text style={styles.textLorem}>
                    {moreInfoUser.data}
                </Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    textName: {
        fontSize: 20,
        color: 'grey',
        fontWeight: '400'
    },
    textLorem: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400'
    },
});

export default AboutUser;
