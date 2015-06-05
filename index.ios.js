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
  ListView,
  Text,
  Image
} = React;

var yuetai = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['first', 'second','first', 'second','first', 'second','first', 'second','first', 'second','first', 'second'
        ,'first', 'second','first', 'second','first', 'second','first', 'second']),
    };
  },

  renderRow: function (rowData) {
    return (
      <Text style={{fontSize: '20',marginBottom: 10}}>{rowData}</Text>
    )
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView 
          keyboardDismissMode="onDrag"
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="onDrag"
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
        />
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
