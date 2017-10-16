/**
 * Created by Ngoc Son Tran on 10/13/2017.
 */
var React = require('react');
var StudentStore = require('../stores/StudentStore.js');
var StudentList = require('./StudentList.react.js');
var StudentForm = require('./StudentForm.react.js');

var Student = React.createClass({
        getInitialState: function () {
            return {
                students: StudentStore.getStudents(),
            }
        },
        componentDidMount: function () {
            StudentStore.addChangeListener(this._onChange);
        },

        _onChange: function () {
            this.setState({
                students: StudentStore.getStudents()
            })
        },

        render: function () {
            return (
                <div>
                    <StudentForm />
                    <StudentList students={this.state.students}/>
                </div>

        );
    }
});

module.exports = Student;