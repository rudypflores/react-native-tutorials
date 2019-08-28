import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';


const CardList = ({ title, subtitle }) => {
    return (
        <View>
            <Card style={styles.card}>
                <Card.Title 
                    title={title} 
                    subtitle={subtitle}
                />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions style={styles.cardButton}>
                    <Button onPress={() => console.log('cancel')}>CANCEL</Button>
                    <Button onPress={() => console.log('ok')}>OK</Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        elevation: 2,
        margin:20,
    },
    cardButton: {
        alignSelf:'flex-end'
    }
});

export default CardList;