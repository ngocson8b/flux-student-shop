/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var React = require('react');
var StudentActions = require('../actions/StudentActions.js');

var StudentForm = React.createClass({
    _onClickAdd: function () {
        StudentActions.addStudent({name: this.state.name});
    },
    _onChangeName: function (e) {
        this.setState({
            name: e.target.value,
        });
    },
    getInitialState: function () {
        return {
            name: "",
        }
    },
    render: function () {
        return(
            <div>
                <p>
                    Name:
                </p>
                <div>
                    <input value={this.state.name} onChange={this._onChangeName} />
                </div>
                <div>
                    <input type="button" value="Add" onClick={this._onClickAdd}/>
                </div>
            </div>
        )
    }
});

module.exports = StudentForm;