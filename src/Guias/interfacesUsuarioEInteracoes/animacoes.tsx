import {useEffect, useRef, type PropsWithChildren, type FC} from "react";
import {Animated, Easing, Text, View, type ViewStyle} from "react-native";

type FadeinViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: FC<FadeinViewProps> = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 100,
            easing: Easing.back(),
            duration: 2000,
            useNativeDriver: true
        }).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim
            }}
        >
            {props.children}
        </Animated.View>
    )
}

export function Animacoes(){
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                    Fading in
                </Text>
            </FadeInView>
        </View>
    )
}