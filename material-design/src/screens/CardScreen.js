import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardList from '../components/cardList';


const CardScreen = () => {

    //Card information for list
    const cardData = [{ title:'#1', subtitle:'number one' }, 
                      { title:'#2', subtitle:'number two' },
                      { title:'#3', subtitle:'number three' },
                      { title:'#4', subtitle:'number four' },
                      { title:'#5', subtitle:'number five' }];

    return (
        <View>
            {/* Missing a keyExtractor */}
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={cardData}
                renderItem={({ item }) => {
                    return (
                        <CardList 
                            title={item.title} 
                            subtitle={item.subtitle}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CardScreen;