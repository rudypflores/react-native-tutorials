import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                showsVerticalScrollIndicator={false}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize:20,
        textAlign:'center',
        fontWeight: 'bold',
        margin:20,
    },
    image: {
        height:256,
        width:512,
        alignSelf:'center',
    }
});

export default ResultsShowScreen;