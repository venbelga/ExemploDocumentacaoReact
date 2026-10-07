import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {PropsWithChildren} from 'react';


const styles = StyleSheet.create({
    container: {
        marginTop: 50,        
    },
    containerFlex: {
        flex: 1,
        padding: 20
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    }
});

export function DirectionLayout(){
    const [direction, setDirection] = useState('ltr');

    return (
        <PreviewLayout
            label="direction"
            value={['ltr', 'rtl']}
            selectedValue={direction}
            setSelectedValue={setDirection}
        >
            <View style={[stylesPreviewLayout.box, {backgroundColor: 'powerblue'}]} />
            <View style={[stylesPreviewLayout.box, {backgroundColor: 'skyblue'}]} />
            <View style={[stylesPreviewLayout.box, {backgroundColor: 'steelblue'}]} />
        </PreviewLayout>
    )
}

export function FlexDirectionBasics(){
    const [flexDirection, setFlexDirection] = useState('column');

    return (
        <PreviewLayout
            label="flexDirection"
            value={['column', 'row', 'row-reverse', 'column-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setFlexDirection}
        >
            <View style={[stylesPreviewLayout.box, {backgroundColor: 'powerblue'}]} />
            <View style={[stylesPreviewLayout.box, {backgroundColor: 'skyblue'}]} />
            <View style={[stylesPreviewLayout.box, {backgroundColor: 'steelblue'}]} />
        </PreviewLayout>
    )

}

const PreviewLayout = ({
    label, children, value, selectedValue, setSelectedValue
}: PreviewLayoutProps) => (
    <View style={{padding: 10, flex: 1}}>
        <Text style={stylesPreviewLayout.label}>{label}</Text>
        <View style={stylesPreviewLayout.row}>
            {value.map(v => (
                <TouchableOpacity
                    key={v}
                    onPress={() => setSelectedValue(v)}
                    style={[stylesPreviewLayout.button, selectedValue === v && stylesPreviewLayout.selected]}
                >
                    <Text style={[stylesPreviewLayout.buttonLabel, selectedValue === v && stylesPreviewLayout.selectedLabel]}>{v}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[stylesPreviewLayout.container, {[label]: selectedValue}]}>
            {children}
        </View>
    </View>
)

const stylesPreviewLayout = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 50,
        height: 50,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral'
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    }
})

type PreviewLayoutProps = PropsWithChildren<{
    label: string;
    value: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}>;

export function Flex(){
    return(
        <View style={[styles.containerFlex, {flexDirection: 'column'}]}>
            <View style={{flex: 1, backgroundColor: 'red'}} />
            <View style={{flex: 2, backgroundColor: 'darkorange'}} />
            <View style={{flex: 3, backgroundColor: 'green'}} />
        </View>
    );
}

export function PercentageDimensionsBasics() {
    return(
        <View style={{height: '100%'}}>
            <View style={{height: '15%', backgroundColor: 'powderblue'}} />
            <View style={{width: '66%', height: '35%', backgroundColor: 'skyblue'}} />
            <View style={{width: '33%', height: '50%', backgroundColor: 'steelblue'}} />
        </View>
    )
}

export function FlexDimensionsBasics() {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor: 'powderblue'}} />
            <View style={{flex:2, backgroundColor: 'skyblue'}} />
            <View style={{flex:3, backgroundColor: 'steelblue'}} />
        </View>
    )
}

export function FixedDimensionsBasics(){
    return (
        <View>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
        </View>
    )
}

export function LotsOfStyles() {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigBlue}>just bigBlue</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
            <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>    
    )
}