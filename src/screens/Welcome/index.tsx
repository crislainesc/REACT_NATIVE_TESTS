import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const Welcome: React.FC = ({navigation}: any) => {
    const goToLoginHandler = () => {
        navigation.navigate('login');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/react-native-http-de2b8.appspot.com/o/Top.png?alt=media&token=7f31f47b-b629-47ce-9ed2-99b5493df667',
                }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.text}>
                    Testes automatizados no Reat Native
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToLoginHandler}
                >
                    <Text style={styles.buttonText}>Conecte-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    image: {
        flex: 3,
    },

    infoContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        padding: 50,
    },

    text: {
        fontSize: 35,
        color: '#005555',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    button: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#069A8E',
        width: 125,
        height: 50,
        borderRadius: 15,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Welcome;
