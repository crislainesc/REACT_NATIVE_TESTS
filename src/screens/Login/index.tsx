import {View, StyleSheet, Text, Button, TextInput} from 'react-native';

const Login: React.FC = ({navigation}: any) => {
    const goToHomeHandler = () => {
        navigation.navigate('home');
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.welcomeText]}>
                Bem vindo de volta!
            </Text>
            <Text style={[styles.text, styles.infoText]}>
                Por favor, informe suas credenciais
            </Text>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        style={styles.input}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha"
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
            </View>

            <Text style={[styles.text, styles.rememberPasswordText]}>
                Esqueceu sua senha?
            </Text>

            <View style={styles.button}>
                <Button
                    title="Conecte-se"
                    color="transparent"
                    onPress={goToHomeHandler}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        padding: 30,
        backgroundColor: 'white',
    },

    text: {
        textAlign: 'left',
        padding: 10,
    },

    welcomeText: {
        fontSize: 25,
        color: '#005555',
        fontWeight: 'bold',
    },

    infoText: {
        fontSize: 20,
        color: '#707070',
    },

    form: {},

    inputContainer: {
        alignItems: 'flex-start',
        marginTop: 20,
    },

    label: {
        fontSize: 18,
        color: '#707070',
        fontWeight: 'bold',
        marginLeft: 15,
        position: 'relative',
        top: 10,
        width: 75,
        backgroundColor: 'white',
        textAlign: 'center',
    },

    input: {
        width: '95%',
        height: 50,
        borderWidth: 2,
        borderColor: '#D7CDCD',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 15,
    },

    rememberPasswordText: {
        fontSize: 20,
        color: '#005555',
        fontWeight: 'bold',
        textAlign: 'right',
    },

    button: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#069A8E',
        width: '100%',
        height: 50,
        borderRadius: 15,
    },
});

export default Login;
