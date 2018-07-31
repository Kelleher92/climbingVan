import React, { Component } from 'react';
import $ from 'jquery';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null
        }

        this.submitEmail = this.submitEmail.bind(this);
    }

    handleChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    isvalidEmail(input) {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailPattern.test(input);
    }

    submitEmail() {
        var me = this;
        if(this.isvalidEmail(this.state.email)) {
            this.props.recordEmail(this.state.email).then(function(res) {
                res = JSON.parse(res);

                if(res.responseCode === 200) {
                    me.input.value = "";
                } 
            });   
        }
        else {
            console.log('invalid input');
        }
    }

	render() {
		return (
            <div>               
                <img className="logo" src="public/images/logo.png" />  
                <div className="center">
                    <div className="title">COMING SOON</div>
                    <div className="divider"></div>
                    <div className="subtext">ClimbingVan.com</div>
                </div>
                <div className="subscribe">
                    <input placeholder="E-mail Address" ref={el => this.input = el} onChange={(e) => this.handleChange("email", e)} />
                    <button className="button" onClick={this.submitEmail}>Subscribe</button>
                </div>
            </div>
		);
	}
}