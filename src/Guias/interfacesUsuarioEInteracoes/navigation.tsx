import { createStaticNavigation } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import {useNavigation} from "@react-navigation/native";

type RootStackParamList = {
    Home: undefined;
    Profile: {name: string};
};

const RootStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: HomeScreen,
            options: {title: 'Home'},
        },
        Profile: {
            screen: ProfileScreen
        }
    }
});

export const Navigation = createStaticNavigation(RootStack);

export function HomeScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <Text>Home Screen</Text>
            <Button 
                title="Go to profile"
                onPress={() => navigation.navigate('Profile', {name: 'Profile'})}
            />
        </View>
    )
}

export function ProfileScreen({route} : any){
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    )
}