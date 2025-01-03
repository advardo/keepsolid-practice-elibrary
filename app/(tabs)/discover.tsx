import Book from '@/components/Book';
import { books } from '@/constants/utils';
import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const DiscoverScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Пошук..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="white"
            />
            <ScrollView
                contentContainerStyle={styles.booksContainer}
                showsVerticalScrollIndicator={false}
            >
                {books.map((book) =>
                    book.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ? (
                        <Book key={book.id} {...book} />
                    ) : null
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 46,
        color: 'white',
        marginHorizontal: 16,
        fontSize: 18,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#4ac6fa',
    },
    booksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        paddingBottom: 48,
    },
    bookItem: {
        width: '48%',
        marginBottom: 16,
        alignItems: 'center',
    },
    bookImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    bookTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DiscoverScreen;
