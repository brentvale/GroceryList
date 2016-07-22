var React = require('react');
var StoreItem = require('./store_item.jsx').StoreItem;

var StoreShow = React.createClass({
  getInitialState: function(){
    return {displaying: false};
  },
  toggleDisplaying: function(){
    this.setState({displaying: !this.state.displaying});
  },
  render: function(){
    if(this.state.displaying){
      return(
        <div>
          <h2 className="active" onClick={this.toggleDisplaying}>
            {this.props.storeName}
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
          </h2>
          <ul>
            {this.props.storeItems.map(function(obj, idx){
              return <li key={idx}><StoreItem itemName={obj}></StoreItem></li>;
            })}
          </ul>
        </div>
      )
    } else {
      return(
        <div>
          <h2 onClick={this.toggleDisplaying}>
            {this.props.storeName}
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
          </h2>
        </div>
      )
    }
    
  }
});

module.exports = {
  StoreShow: StoreShow
}