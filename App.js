import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import data from './data/fortune-cookie-data.json';
import FortuneModal from './components/fortuneModal';
import InputModal from './components/inputModal';

export default function App() {
  const [fortuneModal, setFortuneModal] = useState([false, {}, ""]);
  const [inputModal, setInputModal] =  useState(false);
  const color = ['#00aaff', '#ac82fa', '#22ffaa', '#bf94e4', '#a8e6cf'];
  return (
    <View style={styles.container}>
      <FortuneModal show={fortuneModal} setShow={()=>setFortuneModal([false, {}, ""])}/>
      <InputModal show={inputModal} setShow={() => setInputModal(false)}/>

      {/* A fixed header. */}
      <View style={styles.textContainer}>
        <Text style={styles.myfortunesText}>My Fortunes</Text>
        <Text style={styles.addButton} onPress={()=>setInputModal(true)}>+</Text>
      </View>

      {/* JSON file data */}
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.fortunesContainer}>
        {data.fortunes.reverse().map((fortune, index) => {
          var selectedColor = '';
          if(index%5 === 0) {
            selectedColor = color[0];
          } else if(index%5 === 1) {
            selectedColor = color[1];
          } else if(index%5 === 2) {
            selectedColor = color[2];
          } else if(index%5 === 3) {
            selectedColor = color[3];
          } else {
            selectedColor = color[4];
          }
          return (
            <TouchableOpacity style={[styles.fortuneBox, {backgroundColor:selectedColor}]} key={index}
            onPress={()=>setFortuneModal([true, fortune, selectedColor])}>
              <Text style={{color: 'white', marginHorizontal: 7}}>{fortune.text}</Text>
              <Text style={styles.dateBox}>{new Date(fortune.date).toDateString().replace(/[A-Za-z]*\s/, "").replace(/\s(?=\d{4})/, ', ')}</Text>
            </TouchableOpacity>);
        })}
        </View>
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  myfortunesText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  fortunesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fortuneBox: {
    borderRadius: 5,
    width: '48%',
    height: 120,
    marginBottom: 5,
    marginLeft: 5,
    alignItems:'center',
    justifyContent: 'space-around',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 50,
    width: '98%',
    justifyContent:'space-between',
  },
  addButton: {
    fontSize: 30,
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: 'black',
    color:'white',
    width: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
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
