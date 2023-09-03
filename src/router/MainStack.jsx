import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from '../screens/MainScreen';
import UserDetailScreen from "../screens/UserDetailScreen";
import UserDetailHeader from "../components/headers/UserDetailHeader";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{header: () => <UserDetailHeader />}}/>
        </Stack.Navigator>
    )
};

export default MainStack;