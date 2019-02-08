import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder={"example@email.com"}
        />
        <TextInput 
          placeholder={"your password"}
        />
        <Button title={"Login"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
