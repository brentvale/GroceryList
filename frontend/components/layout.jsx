var React = require('react');
var StoreShow = require('./store_show.jsx').StoreShow;

var Layout = React.createClass({
  render: function(){
    var shoppingStores = ["Safeway", "OSH", "Costco"];
    
    var safewayStoreItems = ["milk", "eggs", "lemonade"];
    var oshStoreItems = ["rake", "lightbulbs", "corn-feed"];
    var costcoStoreItems = ["bulk avocados", "computer", "boxers"];
    
    return (
      <div>
        <ul>
          <li><StoreShow storeName={"Safeway"} storeItems={safewayStoreItems}/></li>
          <li><StoreShow storeName={"OSH"} storeItems={oshStoreItems}/></li>
          <li><StoreShow storeName={"Costco"} storeItems={costcoStoreItems}/></li>
        </ul>
      </div>
    )
  }
});
module.exports = {
  Layout: Layout
}