import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardList from '../components/cardList';


const CardScreen = () => {

    //Card information for list
    const cardData = [{ title:'Trip to San Cristobal', subtitle:'location in the capital of Guatemala', img:require('../../assets/imgOne.jpg') }, 
                      { title:'Trip to Panajachel', subtitle:'Skydiving and hiking wild are in Guatemala', img:require('../../assets/imgTwo.jpg') },
                      { title:'Trip to Hollywood', subtitle:'Hiking area around the famous Hollywood sign', img:require('../../assets/imgThree.jpg') },
                      { title:'Trip to Itztapa\'s Hot Springs', subtitle:'Hot spring area full of beautiful scenery', img:require('../../assets/imgFour.jpg') },
                      { title:'Rio Dulce', subtitle:'Famous river in Guatemala with boating and a nice dock area', img:require('../../assets/imgFive.jpg') }];

    return (
        <>
            {/* Missing a keyExtractor */}
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={cardData}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => {
                    return (
                        <CardList 
                            title={item.title} 
                            subtitle={item.subtitle}
                            img={item.img}
                        />
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default CardScreen;