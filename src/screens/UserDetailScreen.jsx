import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { getUserDetail } from '../services/usersService'
import LoadingComponent from '../components/LoadingComponent';
import CardUser from '../components/CardUser';
import AboutUser from '../components/AboutUser';
import ContactUser from '../components/ContactUser';

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
                        <View>
                            <CardUser userData={userData} />
                        </View>
                        <View style={styles.containerData}>
                          <AboutUser userData={userData} />
                        </View>
                        <View style={styles.containerMail}>
                          <ContactUser userData={userData} handleContact={contactMe} />
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
    containerData: {
        flex: 1.5,
        paddingHorizontal: 10,
        gap: 5,
        width: '100%'
    },
    containerMail: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default UserDetailScreen;
