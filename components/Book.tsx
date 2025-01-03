import React, { useCallback } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface BookProps {
    img: string;
    name: string;
    author: string;
}

const Book: React.FC<BookProps> = ({ img, name, author }) => {
    const navigation = useNavigation<NavigationProp<any>>();

    const onPress = useCallback(() => {
        navigation.navigate('BookDetailedScreen', { img, name, author });
    }, [navigation, img, name, author]);

    return (
        <TouchableOpacity style={styles.book} onPress={onPress}>
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
                {name}
            </Text>
            <Text style={styles.author}>{author}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    book: {
        margin: 10,
        width: 130,
    },
    image: {
        width: 130,
        height: 200,
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 12,
        color: '#666',
    },
});

export default Book;
