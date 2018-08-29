import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import Home from './pages/Home'; 

class App extends Component {
    constructor() {
        super();
        this.token = $('#session-token').val();
    }   

    recordEmail(email) {
        return $.ajax({
            method: 'POST',
            data: {
                token: this.token,
                action: 'recordEmail',
                data: JSON.stringify({email: email})
            },
            url: 'public/process.php',
            success: function(res) {
                console.log(res);
                res = JSON.parse(res);

                if(res.responseCode === 200) {
                    alert(res.message);
                } else {
                    alert(res.message);
                }
            },
            error: function(res) {
                console.log(res);
            }
        });
    } 

	render() {
		return (
            <Router>
    			<div>
                    <Switch>
                        <Route exact={true} path="/(|home)" render={(props) => (
                            <Home {...props} token={this.token} recordEmail={this.recordEmail} />
                        )}/>
                    </Switch>
    	    	</div>
            </Router>
		);
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);