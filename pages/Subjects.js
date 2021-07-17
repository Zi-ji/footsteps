import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from '../components/NavigatorTab';

export const Subjects = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.texts, ...styles.boldTexts, ...styles.centerText }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    Subjects
                </Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    We will help you develop these skills.
                </Text>
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
});
export default Subjects;