import React  from 'react';
var Vote = require('./components/Vote.react.js');
var App = React.createClass({

  render: function() {
    return (
      <div >
          <Vote />
      </div>
    );
  }
});

export default App;
