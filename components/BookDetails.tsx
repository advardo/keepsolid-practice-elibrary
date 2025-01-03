import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface BookDetailsProps {
    img: string;
    name: string;
    author: string;
    description: string;
}

const BookDetails: React.FC<BookDetailsProps> = ({
    img,
    name,
    author,
    description,
}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    author: {
        fontSize: 18,
        color: '#666',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#333',
    },
});

export default BookDetails;
