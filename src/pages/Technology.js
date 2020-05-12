import React, { useEffect, useState } from 'react';
import { StyleSheet, 
    ActivityIndicator, 
    FlatList, 
    Text, 
    View,  
    TouchableOpacity, 
    Modal
     } from 'react-native';

import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState()
  const nytkey = 'bNRgwOiIKkASCAoq8fceEcb2UBGy0XyQ';

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${ nytkey }`)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  

  return (
    <View style={styles.container} >
      {isLoading ? <ActivityIndicator size="small" color="#DDD"/> : (
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <>

                <TouchableOpacity
                    onPress={() => {setModalVisible(true), setUrl(item.url)}} >
                    <View style={styles.item}>
                        <Text style={styles.title} >{item.title}</Text>
                        <Text style={styles.abstract} >{item.abstract}</Text>
                        <Text style={styles.url} >URL: {item.url}</Text>              
                    </View>
                </TouchableOpacity>
                
                {/* MODAL */}
                <View style={styles.centeredView}>
               
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Noticia Fechada");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <>
                            <WebView style={styles.modalView}
                            source={{ uri: url} }  />
                                <TouchableOpacity style={{ ...styles.button }}
                                    onPress={() => {setModalVisible(!modalVisible); }} >
                                    <Text style={styles.text}>Fechar</Text>
                                </TouchableOpacity>
                            </>
                        </View>
                    </Modal>
                </View>

            </>
          )}
        />
      )}
    </View>
  );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#DDD',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      flex: 1
      
    },
    abstract:{
        fontSize: 18,
        marginTop: 5
    },
    url: {
        fontSize: 10,
        marginTop: 5
    },
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 5
    },
    modalView: {
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        elevation: 5
    },
    button: {
        backgroundColor: "#DDDD",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    text: {
        fontWeight: "bold",
        textAlign: "center"
    }
  });
  