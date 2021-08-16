import React from 'react';
import {StyleSheet, View, Modal, Text, StatusBar} from 'react-native';

export default function FortuneModal(props) {
    return(
        <Modal
            visible={props.show[0]}
            onRequestClose={props.setShow}
        >
            <StatusBar backgroundColor={props.show[2]} />
            <View style={[styles.modalContainer, {backgroundColor: props.show[2]}]}>
                <Text style={[styles.closeX, {color: props.show[2]}]} onPress={props.setShow}>X</Text>
                <Text style={styles.fortuneMessage}>{props.show[1].text}</Text>
                <Text style={styles.dateBox}>{new Date(props.show[1].date).toDateString().replace(/[A-Za-z]*\s/, "").replace(/\s(?=\d{4})/, ', ')}</Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    closeX: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        textAlignVertical: 'center',
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