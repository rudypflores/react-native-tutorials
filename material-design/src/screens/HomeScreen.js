import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Button 
                mode='contained' 
                onPress={() => {console.log('color view pressed')}}
                color='#1565C0'
                icon='palette'
                style={styles.button}>
                Material Color Generator
           </Button>
           <Button 
                mode='contained' 
                onPress={() => {console.log('card view pressed')}}
                color='#1565C0'
                icon={() => <MaterialCommunityIcons name='cards' color='white'/>}
                style={styles.button}>
                Card View Examples
           </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ECEFF1',
        justifyContent:'center',
    },
    button: {
        margin:15,
        alignSelf:'center'
    }
});

export default HomeScreen;