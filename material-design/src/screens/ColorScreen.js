import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorBar from '../components/colorBar';


const BIAS = 25;

const ColorScreen = () => {

    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const increaseColor = (name) => {
        switch(name) {
            case 'red':
                (BIAS + red) < 255 ? setRed(BIAS + red) : null;
                break;
            case 'green':
                (BIAS + green) < 255 ? setGreen(BIAS + green) : null;
                break;
            case 'blue':
                (BIAS + blue) < 255 ? setBlue(BIAS + blue) : null;
                break;
        }
    };

    const decreaseColor = (name) => {
        switch(name) {
            case 'red':
                (red - BIAS) > 0 ? setRed(red - BIAS) : null;
                break;
            case 'green':
                (green - BIAS) > 0 ? setGreen(green - BIAS) : null;
                break;
            case 'blue':
                (blue - BIAS) > 0 ? setBlue(blue - BIAS) : null;
                break;
        }
    };  

    return (
        <View style={styles.container}>
            <Text style={styles.descritpion}>Modify the RGB values to generate a color</Text>
            <ColorBar name='red' hex='#F44336' increaseColor={increaseColor} decreaseColor={decreaseColor}/>
            <ColorBar name='green' hex='#43A047' increaseColor={increaseColor} decreaseColor={decreaseColor}/>
            <ColorBar name='blue' hex='#0D47A1' increaseColor={increaseColor} decreaseColor={decreaseColor}/>
            <View style={{ height:100, width:100, backgroundColor:`rgb(${red}, ${green}, ${blue})` }} />
            <Text style={{ fontSize:16, color:`rgb(${red},${green},${blue})`, elevation:2, fontWeight:'bold' }}>rgb({red},{green},{blue})</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ECEFF1',
        justifyContent:'space-around',
        alignItems:'center'
    },  
    descritpion: {
        fontWeight:'bold',
        color:'#1565C0',
        fontSize:20,
        textAlign:'center',
        elevation:2
    }
});


export default ColorScreen;