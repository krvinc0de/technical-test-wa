import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MainHeader from '../components/MainHeader';
import { getAllUsers } from '../services/usersService';
import UserItem from '../components/UserItem';
import SeparatorComponent from '../components/SeparatorComponent';
import LoadingComponent from '../components/LoadingComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import PageSelector from '../components/PageSelector';

const MainScreen = () => {

    const [usersData, setUsersData] = useState([]);

    const pageRender = useSelector(state => state.pagination.value)

    useEffect(() => {
        getAllUsers(pageRender).then(response => {
            setUsersData(response.data.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <MainHeader />
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        ListEmptyComponent={() => <LoadingComponent />}
                        ItemSeparatorComponent={() => <SeparatorComponent />}
                        contentContainerStyle={{
                            width: '100%',
                            paddingHorizontal: 20,
                            paddingTop: 10,
                            paddingBottom: 80,
                        }}
                        data={usersData}
                        renderItem={({index, item}) => <UserItem key={index} data={item} index={index} />}
                    />
                </View>
                <PageSelector />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        gap: 10
    },
    header: {
        maxHeight: 100,
        justifyContent: 'center',
        paddingVertical: 5,
    },
    listContainer: {
        flex: 10,
        width: '100%',
    },
});

export default MainScreen;