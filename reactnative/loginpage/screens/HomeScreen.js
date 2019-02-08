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
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
  }

  handleEmailInput(text){
    this.setState(
      {
        email: text
      }
    )
  }

  handlePasswordInput(text){
    this.setState(
      {
        password: text
      }
    )
  }

  handleLogin(){
    alert(
      `Your email: ${this.state.email} ${"\n"} Your password: ${this.state.password}`
    )
  }

  render() {
    return (
      <View style={styles.container}>        
          <TextInput          
              placeholder={"user@email.com"}          
              style={styles.textInput} 
              onChangeText={this.handleEmailInput}       
          />        
          <TextInput          
              secureTextEntry={true}          
              placeholder={"Your password"}          
              style={styles.textInput}
              onChangeText={this.handlePasswordInput}        
          />        
          <Button 
            title={"Login"} 
            style={styles.button}
            onPress={() => this.handleLogin()}
          />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,    
    backgroundColor: "#F5FCFF",    
    justifyContent: "center",    
    alignItems: "center"  
  },  
  welcome: {    
      fontSize: 20,    
      textAlign: "center",    
      margin: 10  
  },  
  textInput: {    
      borderWidth: 1,    
      borderColor: "#eee",    
      height: 45,    
      width: 300,    
      padding: 5,    
      marginBottom: 22  
  },
  button: {
    borderColor:"#dbaf57"
  }
});
