import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/paginationSlice';

const PageSelector = () => {

    const dispatch = useDispatch();
    const { page, totalPage } = useSelector(state => state.pagination);

    const handleNextPage = () => {
        dispatch(increment());
    };

    const handlePreviousPage = () => {
        dispatch(decrement());
    };

    return (
        <View style={styles.paginationContainer}>
             <View style={styles.itemPagination}>
                <TouchableOpacity 
                    style={[styles.buttonPagination, { display: page === 1 ? 'none' : 'flex' }]}
                    onPress={handlePreviousPage}
                >
                    <AntDesign name="left" size={24} color="black" />
                    <Text style={styles.textButton}>Página anterior</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemPagination}>
            <TouchableOpacity 
                    style={[styles.buttonPagination, { display: page === totalPage ? 'none' : 'flex' }]}
                    onPress={handleNextPage}
                >
                    <Text>Siguiente página</Text>
                    <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        bottom: 0,
        height: 50
    },
    itemPagination: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    buttonPagination: {
        flexDirection: 'row',
        backgroundColor: '#F1F0E8',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        borderRadius: 10,
        elevation: 5,
        paddingHorizontal: 5,
    }
});

export default PageSelector;
