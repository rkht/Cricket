import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const History = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('Info'); // State to track selected tab

    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
    };

    const handlePress = (screen) => {
        navigation.navigate('Main');
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Text style={styles.text55}>Rwanda Womens vs Cameroon Womens, 1st Match</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                        <View style={styles.tabRow}>
                            {['Info', 'Live', 'Scorecard', 'Squads', 'Over', 'Run'].map((tabName, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.tabItem, selectedTab === tabName && styles.selectedTab]}
                                    onPress={() => handleTabPress(tabName)}
                                >
                                    <Text style={styles.tabText}>{tabName}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.inningBreakContainer}>
                    <Text style={styles.inningBreakText}>Inning Break</Text>
                </View>
                <View>
                    <Text style={styles.inningText}>RWAW</Text>
                </View>
                <View>
                    <Text style={styles.inningText}>141-5(20)</Text>
                </View>
                <View style={styles.rowWithBorders}>
                    <View style={styles.rowContainer}>
                        <View style={styles.rowItem}>
                            <Text>CCR 7.5</Text>
                        </View>
                        <View style={styles.rowItem}>
                            <Text>P'SHIP 10(5)</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.box12} onPress={() => handlePress('Home')}>
                    <Icon name="home" size={30} color="black" />
                    <Text style={styles.categoryText12}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box12} onPress={() => handlePress('Matches')}>
                    <Icon name="sports-cricket" size={30} color="black" />
                    <Text style={styles.categoryText12}>Matches</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box12} onPress={() => handlePress('Video')}>
                    <Icon name="videocam" size={30} color="black" />
                    <Text style={styles.categoryText12}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box12} onPress={() => handlePress('News')}>
                    <Icon name="article" size={30} color="black" />
                    <Text style={styles.categoryText12}>News</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box12} onPress={() => handlePress('More')}>
                    <Icon name="more-horiz" size={30} color="black" />
                    <Text style={styles.categoryText12}>More</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        backgroundColor: '#00e600',
    },
    text55: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15,
        marginTop: 10,
    },

    tabRow: {
        flexDirection: 'row',
    },
    tabItem: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginHorizontal: 7, // This will create a gap of 20 between items
    },
    tabText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    selectedTab: {
        borderBottomWidth: 4,
        borderBottomColor: 'white',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    box12: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    categoryText12: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 12,
        marginTop: 6,
    },
    inningBreakContainer: {
        padding: 15,
    },
    inningBreakText: {
        color: 'red',
        fontSize: 20,
    },

    inningText: {
        color: 'black',
        fontSize: 30,
        marginLeft: 15,
        fontWeight: 'bold',

    },
    rowWithBorders: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    rowItem: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',

    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: 'black',
    },
});

export default History;
