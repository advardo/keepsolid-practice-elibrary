import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { IconSymbol } from '@/components/ui/IconSymbol';

type RootStackParamList = {
    BookDetailedScreen: {
        name: string;
        img: string;
        author: string;
    };
};

type BookDetailedScreenRouteProp = RouteProp<
    RootStackParamList,
    'BookDetailedScreen'
>;

const BookDetailedScreen: React.FC = () => {
    const {
        params: { name, img, author },
    } = useRoute<BookDetailedScreenRouteProp>();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={navigation.goBack}
                >
                    <IconSymbol size={28} name="arrow.left" color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Book Details</Text>
            </View>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.mainInfo}>
                    <Image source={{ uri: img }} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.author}>{author}</Text>
                        <TouchableOpacity
                            onPress={() => {}}
                            style={{ marginTop: 'auto' }}
                        >
                            <Text style={styles.buttonText}>Читати</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ marginTop: 16 }}>
                    Лора завжди була дивачкою, Айріс — стриманою, не схожою на
                    сестру. Та попри всі розбіжності вони мали спільну долю,
                    спільну історію, прикрості, розділені на двох... Вони були
                    одна в одної всупереч світові. А потім у їхньому житті
                    з’явився ексцентричний письменник Алекс, а з ним прийшло й
                    дещо інше... Те фатальне, що змінило життя сестер і стало
                    причиною зникнення Лори. Єдине, що лишила по собі молодша
                    сестра, — скандальна й загадкова книжка про стосунки жінки й
                    чоловіка, який розповідав своїй коханці фантастичні історії
                    про світ, де мешкають сліпі вбивці. Однак Лорин роман — це
                    схованка. Айріс знає, що в ньому — все їхнє життя з болючими
                    подробицями та секретами, від яких перехоплює подих... Як же
                    все було насправді? Де межа між життям і книжкою?
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#29aae2',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
    },
    image: {
        width: 100,
        height: 150,
        marginRight: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 18,
        color: 'gray',
    },
    backButton: {
        marginRight: 16,
    },
    mainContainer: {
        flex: 1,
        margin: 24,
    },
    mainInfo: {
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#29aae2',
        padding: 8,
        borderRadius: 8,

        textAlign: 'center',
    },
});

export default BookDetailedScreen;
