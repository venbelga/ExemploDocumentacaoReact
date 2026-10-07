import {
    Alert, 
    Button, 
    StyleSheet, 
    View,
    Platform,
    TouchableHighlight,  
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

const stylesTouchables  = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
         alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
})

export function Touchables() {
    const onPressButton = () => Alert.alert('You tapped the button!');
    const onLongPressButton = () => Alert.alert('You long-pressed the button!')

    return (
        <View style={stylesTouchables.container}>
            <TouchableHighlight onPress={onPressButton} underlayColor='white'>
                <View style={stylesTouchables.button}>
                    <Text style={stylesTouchables.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={onPressButton}>
                <View style={stylesTouchables.button}>
                    <Text style={stylesTouchables.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableNativeFeedback onPress={onPressButton}
                background={
                    Platform.OS === 'android' ?
                    TouchableNativeFeedback.SelectableBackground() :
                    undefined
                }
            >
                <View style={stylesTouchables.button}>
                    <Text style={stylesTouchables.buttonText}>
                        TouchableNativeFeedback{' '}
                        {Platform.OS !== 'android' ? '(Android only)' : ''}
                    </Text>
                </View>
            </TouchableNativeFeedback >
            <TouchableWithoutFeedback onPress={onPressButton}>
                <View style={stylesTouchables.button}>
                    <Text style={stylesTouchables.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={onPressButton} onLongPress={onLongPressButton} underlayColor='white'>
                <View style={stylesTouchables.button}>
                    <Text style={stylesTouchables.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export function ButtonBasics (){
    const onPress = () => Alert.alert('You tapped the button!');

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Press me"
                    onPress={onPress}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Press me"
                    onPress={onPress}
                    color="#841584"
                />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
                <Button
                    title="this looks great!"
                    onPress={onPress}
                />
                <Button
                    title="Ok"
                    onPress={onPress}
                    color="#841584"
                />
            </View>
        </View>
    )
}