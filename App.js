import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={require('./Images/Masa.png')}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.userName}>Masa 28</Text>
            <Text style={styles.userIntroduction}>大学生</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '95%',
    height: '75%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  userName: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  userIntroduction: {
    fontSize: 20,
    color: 'white',
    lineHeight: 30,
  },
});

export default App;
