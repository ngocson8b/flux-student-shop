/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var React = require('react');
var VoteStore = require('../stores/VoteSote.js');
var VoteActions = require('../actions/VoteActions.js');
var StudentStore = require('../stores/StudentStore.js');

var Vote = React.createClass({
    getInitialState: function() {
        return VoteStore.getVotes()
    },
    componentDidMount: function () {
        VoteStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState(VoteStore.getVotes());
    },
    _onVoteUpClick: function () {
        VoteActions.voteUp();
    },
    _onVoteDownClick: function () {
        VoteActions.voteDown();
    },
    _onVoteResetClick: function () {
        VoteActions.voteReset();

    },
    
    render: function () {
        // var style = {
        //     width: this.state.up_rate = '%'
        // }
        return (
            <div>
                <h3 className="deep-orange-text lighten-1">{this.state.up_rate}% ({this.state.up}) : {this.state.down_rate}% ({this.state.down})</h3>
                <button onClick={this._onVoteUpClick}>UP</button>
                <button onClick={this._onVoteDownClick}>DOWN</button>
                <button onClick={this._onVoteResetClick}>Reset</button>
            </div>
        )
    }
});
module.exports = Vote;