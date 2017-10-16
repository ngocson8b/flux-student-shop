/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var VoteActions = {
    voteUp: function () {
        AppDispatcher.dispatch({
            type: Constants.ACTION_VOTE_UP
        });
    },
    voteDown: function () {
        AppDispatcher.dispatch({
            type: Constants.ACTION_VOTE_DOWN
        });
    },
    voteReset: function () {
        AppDispatcher.dispatch({
            type: Constants.ACTION_VOTE_RESET
        });
    }
};

module.exports = VoteActions;