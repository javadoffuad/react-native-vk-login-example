import React, { Component } from 'react';
import VKLogin from 'react-native-vkontakte-login';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  componentDidMount() {
    VKLogin.initialize(6600150);
  }

  async loginVK() {
  //  const isLoggedIn = await VKLogin.isLoggedIn();
    const auth = await VKLogin.login(['email']);
    console.warn('message', auth)
  }

  async getSertificate() {
    const sert = await VKLogin.getCertificateFingerprint();
    console.warn('message', sert)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={() => this.loginVK()}>
          <Text>Login VK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
