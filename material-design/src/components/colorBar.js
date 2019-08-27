import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ColorBar = ({ name, hex, decreaseColor, increaseColor }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => decreaseColor(name)}>
                <MaterialCommunityIcons name='minus-box-outline' size={35} color='#1565C0' style={{ elevation:2 }}/>
            </TouchableOpacity>
            <View style={{ height:100, width:100, backgroundColor:hex, elevation:2}} />
            <TouchableOpacity onPress={() => increaseColor(name)}>
                <MaterialCommunityIcons name='plus-box-outline' size={35} color='#1565C0' style={{ elevation:2 }}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:60 + '%',
        alignSelf:'center'
    },
});

export default ColorBar;