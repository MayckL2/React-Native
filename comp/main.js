import { StyleSheet, Text, View, Image,  } from 'react-native';

export default function Main() {
    return (
        // oque sera mostrado na tela
      <View style={styles.container}>
        {/* inserção de texto */}
        <Text style={styles.text}>Main!</Text>
        {/* inserção de imagem */}
        <Image source={require('./jake.png')} />
      </View>
    );
  }
  
  const styles = ({
     container:{
        width: '100%',
        height: '80%',
        backgroundColor: 'orange',
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'center',
    },
     text:{
        textAlign: 'center',
        position: 'relative',
        
     }
  });