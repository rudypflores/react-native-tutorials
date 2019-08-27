import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


const CardScreen = () => {
    return (
        <View>
            <Text>Card Screen</Text>
            <Card>
                <Card.Title 
                    title='Sample Card' 
                    subtitle='A sample of a simple material card'
                />
                
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CardScreen;