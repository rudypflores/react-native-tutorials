import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 15 }}>Enter Password</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                placeholder='Name'
                onChangeText={(newValue) => setPassword(newValue)}
            />
            { password.length > 5 ? null : <Text style={{ textAlign: 'center' }}>Password must be longer than 5 characters</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 3,
        padding: 15,
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;