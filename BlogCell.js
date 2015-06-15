var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var stripDate = function (dateString) {
  var date = new Date(dateString);
  var result = date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
  return result;
}

var BlogCell = React.createClass({
  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onSelect}>
          <View>
            <Text style={{fontSize: 25,marginBottom: 10,marginTop: 10,color: '#68b16f'}}>{this.props.blog.title}</Text>
            <Text style={{fontSize: 16,marginBottom: 10}}>{stripDate(this.props.blog.created_at)}</Text>
            <Text style={{fontSize: 18,marginBottom: 10}}>{this.props.blog.body.replace(/\&lt;/ig, '<').replace(/\&gt;/ig, '>')
.replace(/\<div/ig, '\n<div').replace(/<.*?>/g, '').slice(0,100)}</Text>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
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
module.exports = BlogCell;
