/**
 * Created by Ngoc Son Tran on 10/16/2017.
 */
var React = require('react');
var ShopActions = require('../actions/ShopActions');

var CartList = React.createClass({
    render: function () {
        if(this.props.cartList) {
            var cartLists = this.props.cartList.map(function (item, index) {
                return (
                    <tr key={index}>
                        <td>
                            <input type="button" value="Remove" onClick={ShopActions.removeFromCart.bind(item, index)}/>
                        </td>
                        <td>{item}</td>
                    </tr>
                );
            }.bind(this));
        }
        return (
            <div>
                <table className="table">
                    <tbody>
                    {cartLists}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CartList;
