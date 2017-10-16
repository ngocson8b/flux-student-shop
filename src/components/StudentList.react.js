/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var React = require('react');
var StudentActions = require('../actions/StudentActions');

var StudentList = React.createClass({
    render: function () {
        var studentList = this.props.students.map(function (student, index) {
            return (
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>
                        <input type="button" value="Remove" onClick={StudentActions.removeStudent.bind(null, index)}/>
                    </td>
                </tr>
            );
        }.bind(this));
        return (
            <div>
                <table className="table">
                    <tbody>
                    {studentList}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = StudentList;