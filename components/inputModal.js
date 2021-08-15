import React, {useState} from 'react';
import {StyleSheet, Modal, View, Text, StatusBar, TextInput, Button} from 'react-native';
import data from '../data/fortune-cookie-data.json';

export default function InputModal(props) {
    const [text, onChangeText] = useState("")

    const addToJson = () =>{
        var date = new Date().toISOString();
        const entry = {"text": text, "date": date};
        data.fortunes.push(entry);
        onChangeText("");
    }
    return(
        <Modal
            visible={props.show}
            onRequestClose={props.setShow}
        >
            <StatusBar backgroundColor="white" />
            <View style={styles.modalContainer}>
                <Text style={styles.closeX} onPress={props.setShow}>X</Text>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    style={styles.text}
                    multiline={true}
                    placeholder="Start writing..."/>
                <Text style={styles.doneButton} onPress={() => addToJson()}>Done</Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    closeX: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        textAlignVertical: 'center',
        color: 'white',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    doneButton: {
        position:'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
        backgroundColor: 'black',
        padding: 8,
        width: 100,
        borderRadius: 5,
        textAlign: 'center',
        fontWeight: 'bold'

    }
});