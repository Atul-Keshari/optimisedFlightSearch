import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Feather} from '@expo/vector-icons';

export default function SearchForm({onSearch}) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departDate, setDepartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
    const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

    const onSearchPress = () => {
        onSearch({from, to, departDate, returnDate});
    };

    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                Search the best prices for your next trip!
            </Text>

            <TextInput onChangeText={setFrom} value={from} placeholder="From" style={styles.input} />
            <TextInput onChangeText={setTo} value={to} placeholder="To" style={styles.input} />

            <View style={styles.datePicker}>
                <Feather name="calendar" size={24} color="gray"/>
                <Text>  </Text>
                <View style={{backgroundColor:'gainsboro',paddingLeft:8,paddingRight:8,borderRadius:8}}>
                    <TextInput
                    style={{color:'gray'}}
                    placeholder="Departure Date"
                    value={departDate.toDateString()}
                    onFocus={() => setShowDepartDatePicker(true)}
                />
                {showDepartDatePicker && (
                    <DateTimePicker
                        value={departDate}
                        onChange={(event, date) => {
                            setShowDepartDatePicker(false);
                            setDepartDate(date);
                        }}
                        minimumDate={new Date()}
                    />
                )}
                </View>
                <Text style={{marginTop:3,color:'gray'}}>  |  </Text>
                <View style={{backgroundColor:'gainsboro',paddingLeft:8,paddingRight:8,borderRadius:8}}>

                <TextInput
                style={{color:'gray'}}
                    placeholder="Return Date"
                    value={returnDate.toDateString()>departDate.toDateString()?returnDate.toDateString():departDate.toDateString()}
                    onFocus={() => setShowReturnDatePicker(true)}
                />
                {showReturnDatePicker && (
                    <DateTimePicker
                        value={returnDate}
                        onChange={(event, date) => {
                            setShowReturnDatePicker(false);
                            setReturnDate(date);
                        }}
                        minimumDate={departDate}
                    />
                )}
                </View>
            </View>
            <Button title="Search" onPress={onSearchPress} />
        </View>
    );
}

const styles=StyleSheet.create(
    {
        card:{
            backgroundColor:'white',
            margin:15,
            marginTop:50,
            padding:15,
            borderRadius:10,
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height: 4,
            },
            shadowOpacity:0.3,
            shadowRadius:4.65,
            elevation:8,
        },
        title:{
            alignSelf:'center',
            color:'gray',
            fontWeight:'500',
            fontSize:16,
            marginVertical:15,
        },
        input:{
            borderWidth:1,
            borderColor:'gainsboro',
            padding:10,
            marginVertical:5,
            borderRadius:5,
            color:'gray'
        },
        datePicker:{
            borderWidth:1,
            borderColor:'gainsboro',
            padding:5,
            borderRadius:5,
            marginVertical:5,
            flexDirection:'row',
            
        },
    }
);