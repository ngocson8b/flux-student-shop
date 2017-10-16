/**
 * Created by Ngoc Son Tran on 10/16/2017.
 */
/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var _= require('underscore'),
    EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants.js');
var assign = require('object-assign');
var AppDispatcher = require('../dispatchers/AppDispatcher.js');



var CHANGE_EVENT = 'change';
var _items = [{name: 'Widget1', cost: 10}, {name: 'Widget2', cost: 20}, {name: 'Widget3', cost: 30}];
var _cartList = [];

function _addItem(item) {
    _cartList.push(item);
}

function _removeItem(item) {
    console.log(_cartList);
    _cartList.splice(item, 1);

}

var ShopStore = _.extend(EventEmitter.prototype, {
    getItems: function () {
        return _items;
    },

    getCartLists: function () {
        return _cartList;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch(action.type) {
        case Constants.ACTION_ADD_TO_CART:
            _addItem(action.item);
            ShopStore.emitChange();
            break;
        case Constants.ACTION_REMOVE_FROM_CART:
            _removeItem(action.item);
            ShopStore.emitChange();
            break;
        default:
    }
});

module.exports = ShopStore;
