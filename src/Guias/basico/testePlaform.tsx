import {Platform, StyleSheet, View, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'green'
            },
            default: {
                backgroundColor: 'blue'
            }
        })
    },
    textVersion: {
        fontSize: 20,
        color: 'white'
    }
})

export default function TestePlatform() {
    return (
        <View style={styles.container} >
            <Text style={styles.textVersion}>Android version: {Platform.Version}</Text>
        </View>
    )
}