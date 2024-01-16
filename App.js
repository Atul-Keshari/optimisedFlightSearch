import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, SafeAreaView,FlatList, ActivityIndicator } from 'react-native';
import SearchForm from './src/components/SearchForm';
import {LinearGradient} from 'expo-linear-gradient';
import FlightOptionItem from './src/components/FlightOptionItem';
import dummydata from './data.json';
import { useState } from 'react';
import  searchFlights  from './src/services/api';


export default function App() {
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState(false);
  const onSearch= async (data)=> {
    setLoading(true);
    // setItems([]);

    const response= await searchFlights(data);

    setItems(response.data);
    setLoading(false);
  }

  return (
    <LinearGradient colors={['white','#E0EFFF']} style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch}/>
        {loading&&(
          <View>
            <ActivityIndicator/>
            <Text>Searching for the best prices...</Text>
          </View>
        )}
        <FlatList  showsVerticalScrollIndicator={false} data={items} renderItem={({item})=><FlightOptionItem flight={item}/>}/>
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
