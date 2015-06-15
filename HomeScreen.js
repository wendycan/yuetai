/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var HomeScreen = require('./HomeScreen');
var BlogScreen = require('./BlogScreen');
var BlogCell = require('./BlogCell');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View,
  ListView,
  Text,
  Image
} = React;

var ApiPrefix = 'http://localhost:3000/api/v1';

var HomeScreen = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds,
    };
  },
  componentWillMount: function () {
    var _this = this;
    fetch(ApiPrefix + '/articles').then((response) => response.json())
      .catch(function (reason) {
        console.log(reason);
      })
      .then(function (responseData) {
        _this.setState({
          dataSource: _this.getDataSource(responseData),
        });
      });
  },
  selectBlog: function (blog: Object) {
    console.log('press')
    this.props.navigator.push({
      title: blog.title,
      component: BlogScreen,
      passProps: {blog},
    });
  },
  renderRow: function (blog) {
    window.blog = blog;
    return (
      <BlogCell 
        onSelect={() => this.selectBlog(blog)}
        blog={blog}
      />
    )
  },

  getDataSource: function(blogs: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(blogs);
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
    paddingTop: 30,
    flex: 1,
    // justifyContent: 'center',
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
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  thumbnail: {
    width: 222,
    height: 227,
  },
});

module.exports = HomeScreen;
