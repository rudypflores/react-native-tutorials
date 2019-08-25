import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <MaterialIcons name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder='Search'
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 3,
        margin: 20,
        flexDirection: 'row',
        elevation: 2,
    },
    inputStyle: {
        fontSize:25,
        flex:1,
    },
    iconStyle: {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
    },
});

export default SearchBar;