import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ShowScreen = ({ navigation }) => {
    
    const { state } = useContext(Context);

    const blogPost = state.find(post => post.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: 
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <MaterialCommunityIcons name='pencil' size={25} style={{ marginRight: 11, }}/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({

});

export default ShowScreen;