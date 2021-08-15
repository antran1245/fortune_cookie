import React from 'react';
import {StyleSheet, View, Modal, Text, StatusBar} from 'react-native';

export default function FortuneModal(props) {
    return(
        <Modal
            visible={props.show[0]}
            onRequestClose={props.setShow}
        >
            <StatusBar backgroundColor="teal" />
            <View style={styles.modalContainer}>
                <Text style={styles.closeX} onPress={props.setShow}>X</Text>
                <Text style={styles.fortuneMessage}>{props.show[1].text}</Text>
                <Text style={styles.dateBox}>{new Date(props.show[1].date).toDateString().replace(/[A-Za-z]*\s/, "").replace(/\s(?=\d{4})/, ', ')}</Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor:'teal',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    closeX: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        padding: 5,
        position:'absolute',
        top: 0
    },
    fortuneMessage: {
        marginHorizontal: 15,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    dateBox: {
        color: 'white',
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,.3)',
        height: 20,
        width: 100,
        textAlign: 'center',
    }
});