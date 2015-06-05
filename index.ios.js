/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var HomeScreen = require('./HomeScreen');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View,
  Text,
  Image
} = React;

var yuetai = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hello word</Text>
        <Image source={{uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzMdAq1SPoSs-ezDLO_XygGvZ_3yfAkCgxwEAu_994Hs8qoyhA'}} style={styles.thumbnail}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 222,
    height: 227,
  },
});

AppRegistry.registerComponent('yuetai', () => yuetai);
