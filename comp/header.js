import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Header!</Text>
      </View>
    );
  }
  
  const styles = ({
    container:{
        width: '100%',
        height: '10%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'flex-end'
    },
     text:{
        width: '100%',
        color: 'white',
        textAlign: 'center',
        padding: 20
     }
  });