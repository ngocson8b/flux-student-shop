/**
 * Created by Ngoc Son Tran on 10/16/2017.
 */
var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var ShopActions = {
    addToCart: function (item) {
        AppDispatcher.dispatch({
            type: Constants.ACTION_ADD_TO_CART,
            item: item,
        });
    },
    removeFromCart: function (item) {
        AppDispatcher.dispatch({
            type: Constants.ACTION_REMOVE_FROM_CART,
            item: item,
        })
    }
}

module.exports = ShopActions;