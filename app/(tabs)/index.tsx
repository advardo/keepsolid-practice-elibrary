import React, { useCallback } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import Book from '@/components/Book';
import { books } from '@/constants/utils';

const HomeScreen = () => (
    <SafeAreaView style={styles.root}>
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            header={
                <View style={styles.header}>
                    <Image
                        source={require('@/assets/images/book.png')}
                        style={styles.bookLogo}
                    />
                    <Text style={styles.headerText}>KeepBook</Text>
                </View>
            }
        >
            <Text style={styles.subheader}>Популярні</Text>
            <FlatList
                data={books.filter((item) => item.popular)}
                renderItem={({ item }) => <Book {...item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.subheader}>Обов'язкові до прочитання</Text>
            <FlatList
                data={books.filter((item) => item.required)}
                renderItem={({ item }) => <Book {...item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.subheader}>Вам може сподобається</Text>
            <FlatList
                data={books.filter((item) => !item.popular && !item.required)}
                renderItem={({ item }) => <Book {...item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </ParallaxScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#29aae2',
    },
    bookLogo: {
        height: 100,
        width: 100,
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    header: {
        bottom: 50,
        left: 50,
        position: 'absolute',
        flexDirection: 'row',
    },
    subheader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default HomeScreen;
