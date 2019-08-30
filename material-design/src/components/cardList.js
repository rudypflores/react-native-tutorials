import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const CardList = ({ title, subtitle, img }) => {

    const [expanded, setExpanded] = useState(false);
    const [arrow, setArrow] = useState('keyboard-arrow-down');

    const expand = () => {
        setExpanded(!expanded);
        if(!expanded) {
            styles.cardContent = { ...styles.cardContent, paddingBottom: 150 };
            setArrow('keyboard-arrow-up');
        } else {
            styles.cardContent = { ...styles.cardContent, paddingBottom: 15 };
            setArrow('keyboard-arrow-down');
        }
    };

    return (
        <View>
            <Card style={styles.card}>
                <Card.Cover source={img} />
                <Card.Content style={styles.cardContent}>
                    <View style={styles.cardInfo}>
                        <Title style={{ fontWeight:'bold', color:'#1565C0' }}>{title}</Title>
                        <Paragraph>{subtitle}</Paragraph>
                    </View>
                    <View style={styles.cardAction}>
                        <TouchableOpacity onPress={() => expand()} color='#1565C0'>
                            <MaterialIcons name={arrow} color='#1565C0' size={35}/>
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        flex:1
    },
    cardContent: {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        flex:10
    },
    cardInfo: {
        alignSelf:'center',
        flex:9
    },
    cardAction: {
        alignSelf:'center',
        flex:1
    }
});

export default CardList;