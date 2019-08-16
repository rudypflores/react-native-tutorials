import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewParent}>
            <View style={styles.viewBoxOne}/>
            <View style={styles.viewBoxTwo}/>
            <View style={styles.viewBoxThree}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewParent: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewBoxOne: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    viewBoxTwo: {
        backgroundColor: 'lightgreen',
        width: 100,
        height: 100,
        alignSelf: 'flex-end',
        flex: 1,
    },
    viewBoxThree: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
    }
});

export default BoxScreen;