import {View, StyleSheet, Text} from 'react-native';

import {AiFillHome, AiOutlineUser} from 'react-icons/ai';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import {BsHandbag} from 'react-icons/bs';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Página Inicial</Text>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.iconActive}>
                    <AiFillHome />
                </View>
                <MdOutlineFavoriteBorder />
                <BsHandbag />
                <AiOutlineUser />
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
        color: '#707070',
        fontSize: 40,
        marginBottom: 20,
    },

    iconActive: {
        color: '#005555',
        justifyContent: 'space-around',
        fontSize: 40,
    },
});

export default Home;
