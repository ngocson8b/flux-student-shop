/**
 * Created by Ngoc Son Tran on 10/16/2017.
 */
/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var StudentActions = {
    addStudent: function (student) {
        AppDispatcher.dispatch({
            type: Constants.ACTION_ADD_STUDENT,
            student: student,
        });
    },
    removeStudent: function (index) {
        AppDispatcher.dispatch({
            type: Constants.ACTION_REMOVE_STUDENT,
            index: index,
        });
    }
}

module.exports = StudentActions;