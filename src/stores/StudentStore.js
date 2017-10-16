/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var _= require('underscore'),
    EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants.js');
var assign = require('object-assign');
var AppDispatcher = require('../dispatchers/AppDispatcher.js');



var CHANGE_EVENT = 'change';
var _students = [{name: 'Nguyen van A'}, {name: 'Nguyen Van B'}];

function _addStudent(student) {
    _students.push(student);
}

function _removeStudent(index) {
    _students.splice(index, 1);
}

var StudentStore = _.extend(EventEmitter.prototype, {
    getStudents: function () {
        return _students;
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
        case Constants.ACTION_ADD_STUDENT:
            _addStudent(action.student);
            StudentStore.emitChange();
            break;
        case Constants.ACTION_REMOVE_STUDENT:
            _removeStudent(action.index);
            StudentStore.emitChange();
            break;
        default:
    }
});

module.exports = StudentStore;
