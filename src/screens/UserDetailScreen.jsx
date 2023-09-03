import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getUserDetail } from '../services/usersService'
import LoadingComponent from '../components/LoadingComponent';
import { moreInfoUser } from '../types/textTypes';

const UserDetailScreen = ({route}) => {

    const [loading, setLoading] = useState(true);
    const [idUser, setIdUser] = useState(route.params.userId);
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        getUserDetail(idUser).then(response => {
            setUserData(response.data.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const contactMe = () => {
        Linking.openURL(`mailto:${userData.email}`)
    }

    return (
        <>
            {
                loading ? (<LoadingComponent />) : (
                    <View style={styles.container}>
                        <View style={styles.containerCardUser}>
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
                        </View>
                        <View style={styles.containerData}>
                           <View>
                                <Text style={styles.textName}>Mas acerca de {userData.first_name + ' ' + userData.last_name}</Text>
                                <Text style={styles.textLorem}>
                                    {moreInfoUser.data}
                                </Text>
                           </View>
                           <View>
                                <Text style={styles.textName}>Acerca de mi trabajo</Text>
                                <Text style={styles.textLorem}>
                                    {moreInfoUser.data}
                                </Text>
                           </View>
                        </View>
                        <View style={styles.containerMail}>
                            <TouchableOpacity
                                onPress={contactMe}
                                style={styles.buttonMail}
                            >
                                <MaterialIcons name="email" size={24} color="grey" />
                                <Text style={styles.textMail}>
                                    Contactame
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: '#FFF',
        paddingTop: 20,
    },
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
    containerData: {
        flex: 1.5,
        paddingHorizontal: 10,
        gap: 5,
        width: '100%'
    },
    textLorem: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400'
    },
    containerMail: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
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

export default UserDetailScreen;
