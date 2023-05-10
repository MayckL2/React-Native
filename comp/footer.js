import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Footer!</Text>
      </View>
    );
  }
  
  const styles = ({
    container:{
        width: '100%',
        height: '10%',
        backgroundColor: 'black',
    },
     text:{
        width: '100%',
        color: 'white',
        textAlign: 'center',
        padding: 20
     }
  });