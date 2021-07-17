import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import ThinkingSVG from '../assets/ThinkingSVG';
import BookSVG from '../assets/BookSVG';
import BlockSVG from '../assets/BlockSVG';
import PointSVG from '../assets/PointSVG';

import ContinueButton from '../components/ContinueButton';

export const Result = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.texts, ...styles.boldTexts, ...styles.centerText }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    Your chosen professions will involve the following skill sets.
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    We will help you develop these skills.
                </Text>
            </View>
            <PagerView style={styles.viewPager} initialPage={0} showPageIndicator>
                <View style={styles.page} key="1">
                    <View style={{ ...styles.texts, ...styles.boldTexts, ...styles.centerText}}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>Critical Analysis</Text>
                    </View>
                    <BlockSVG />
                    <View style={styles.texts}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            {'The ability to logically breakdown a certain component into smaller building blocks of prior knowledge.'}
                        </Text>
                    </View>
                </View>

                <View style={styles.page} key="2">
                    <View style={{ ...styles.texts, ...styles.boldTexts }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Scientific Reasoning</Text>
                    </View>
                    <PointSVG />
                    <View style={styles.texts}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            {'The ability to explain a sequence from basic axioms to the final proposition.'}
                        </Text>
                    </View>
                </View>
            </PagerView>
            <View style={styles.centerText}>
                <ContinueButton navigation={navigation} text="Let's Begin" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
    },
    centerText: {
        alignSelf: 'center',
    },  
    viewPager: {
        display: 'flex',
        flex: 0.8,
        alignSelf: 'stretch',
        marginTop: 50,
        marginLeft: 41,
        marginRight: 41,
    },
    texts: {
        width: 300,
        color: 'white',
    },
    boldTexts: {
        marginTop: 50,
        marginBottom: 50
    },
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#48A9A6',
        borderRadius: 36,
        justifyContent: 'center',
    },
});
export default Result;