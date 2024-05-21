import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {windowWidth} from './src/const';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/asset/board.png')} // Change the path to your image file
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: windowWidth,
    resizeMode: 'contain', // You can adjust resizeMode as per your requirement
  },
});

export default App;
