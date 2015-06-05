var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;


var BlogCell = React.createClass({
  render: function() {
    return (
      <View>
        <TouchableHighlight 
          >
          <View>
            <Text style={{fontSize: 25,marginBottom: 10}} onPress={() => this.selectBlog(blog)}>{this.props.title}</Text>
            <Text style={{fontSize: 16,marginBottom: 10}}>{this.props.blog.created_at}</Text>
            <Text style={{fontSize: 18,marginBottom: 10}}>{this.props.blog.body.slice(0,100)}</Text>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = BlogCell;
