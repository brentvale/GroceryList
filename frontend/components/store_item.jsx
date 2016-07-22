var React = require('react');

var StoreItem = React.createClass({
  render: function(){
    return(
      <div className="item-display">
        <p>{this.props.itemName}</p>
      </div>
    )
  }
});

module.exports = {
  StoreItem: StoreItem
}