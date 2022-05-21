import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Página Inicial</Text>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Ionicons name="home" size={32} color="#005555" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={32} color="#707070" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name="analytics-outline"
                        size={32}
                        color="#707070"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={32} color="#707070" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textContainer: {
        height: '80%',
        justifyContent: 'center',
    },

    text: {
        fontSize: 50,
        color: '#005555',
        fontWeight: 'bold',
    },

    iconsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});

export default Home;
