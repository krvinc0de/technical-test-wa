import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated';


const UserItem = ({data, index}) => {
    
    const navigation = useNavigation();

    const navigate = () => {
        navigation.navigate('UserDetail', {
            userId: data.id
        });
    };

    return (
        <Animated.View
            entering={SlideInLeft.delay(index * 100).springify().damping(20)}
        >
            <TouchableOpacity
                onPress={navigate}
                style={styles.container}
            >
                <View style={[styles.item, styles.firstItem]}>
                    <Image
                        source={{ uri: data.avatar }}
                        resizeMode='contain'
                        style={styles.imageStyle}
                    />
                </View>
                <View style={[styles.item, { width: '70%' }]}>
                    <View style={styles.firstChildrenSecondItem}>
                        <Text style={styles.textName}>{data.first_name + ' ' + data.last_name}</Text>
                    </View>
                    <View style={styles.secondChildrenSecondItem}>
                        <View>
                            <Text style={styles.textUserId}>Usuario: {data.id}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F1F0E8',
        height: 110,
        width: '100%',
        borderRadius: 10,
        elevation: 5,
        padding: 10,
    },
    item: {
        height: '100%',
    },
    firstItem: {
        width: '30%', 
        padding: 5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    imageStyle: {
        width: '100%', 
        height: '100%', 
        borderRadius: 20
    },
    firstChildrenSecondItem: {
        height: '70%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    textName: {
        fontSize: 23,
        color: '#000'
    },
    secondChildrenSecondItem: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    textUserId: {
        fontSize: 12,
        color: 'grey'
    }
});

export default UserItem;
