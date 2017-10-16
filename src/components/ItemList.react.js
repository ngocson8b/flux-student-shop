var React = require('react');
var ShopActions = require('../actions/ShopActions');

var ItemList = React.createClass({
    render: function () {
        var itemList = this.props.items.map(function (item, index) {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                        {item.cost}
                    </td>
                    <td>
                        <input type="button" value="Add to Cart" onClick={ShopActions.addToCart.bind(index, item.name )}/>
                    </td>

                </tr>
            );
        }.bind(this));
        return (
            <div>
                <table className="table">
                    <tbody>
                    {itemList}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = ItemList;