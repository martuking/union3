import * as React from 'react';
import * as ReactDOM from 'react-dom';

var App = React.createClass({
  render() {
    return(
    	<div>
    		<h1>APPLICACIÓN UNION3</h1>
    	</div>
    );
  }
});

ReactDOM.render((
    	<div>
    		 <App />
	 <App />
	 <App />
	 <App />
	 <App />
	 <App />
	     	</div>

), document.getElementById('reactApp'));

