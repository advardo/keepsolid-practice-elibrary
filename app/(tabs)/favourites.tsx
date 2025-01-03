import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const FavouritesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.emptyText}>
                У вас поки що немає вибраних книг
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 24,
        color: '#666',
        marginHorizontal: 24,
        textAlign: 'center',
    },
});

export default FavouritesScreen;
