/**
 * Created by Ngoc Son Tran on 10/16/2017.
 */
/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var React = require('react');
var ShopStore = require('../stores/ShopStore.js');

var ItemList = require('./ItemList.react.js');
var CartList = require('./CartList.react.js');

var Shop = React.createClass({
    getInitialState: function () {
        return {
            items: ShopStore.getItems(),
            cartItem: ShopStore.getCartLists()
        }
    },
    componentDidMount: function () {
        ShopStore.addChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            items: ShopStore.getItems(),
            cartList: ShopStore.getCartLists()
        })
    },

    render: function () {
        return (
            <div>
                <ItemList items={this.state.items} />
                <div>
                    Danh sách đồ được chọn
                </div>
                <CartList cartList={this.state.cartList}/>
            </div>

        );
    }
});

module.exports = Shop;