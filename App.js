import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './comp/header.js';
import Footer from './comp/footer.js';
import Main from './comp/main.js';

export default function App() {
  return (
    // oque sera mostrado na tela
    <View style={styles.container}>
      {/* importa componentes */}
      <Header/>

      {/* <Text style={styles.text}>Olha meu app aqui!</Text> */}
      <Main/>

      <Footer/>
      {/* nao apague isso aqui, nao sei oque faz, mas nao apague */}
      <StatusBar style="auto" />
    </View>
  );
}

// estilizaçao de 'classes', parece css com algumas coisas a menos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'space-around',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontWeight: 'bold',
    // color: '#8A2BE2'
    color: 'purple'  
  }
});
