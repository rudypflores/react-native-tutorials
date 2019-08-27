import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const ResultsDetail = ({ result }) => {

    return(
        <View style={styles.container}>
            {result.image_url ? <Image style={styles.image} source={{ uri: result.image_url }} /> : <View style={styles.placeholder}/>}
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft:20,
    },
    image: {
        width:256,
        height:136,
        borderRadius:3,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    placeholder: {
        width:256,
        height:128,
        backgroundColor:'gray',
    }
});

export default ResultsDetail;