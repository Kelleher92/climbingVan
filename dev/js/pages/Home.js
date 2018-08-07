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
                <div className="section page-top">
                    <img className="logo" src="public/images/logo_subtext.png"/>  
                </div>           
                <div className="section">
                    <div className="divider__container">
                        <img className="divider"/>       
                    </div>                    
                </div>                    
                <div className="section">
                    <div className="divider__container">
                        <img className="divider"/>       
                    </div>              
                </div>              
                <div className="section">
                    <div className="subscribe">
                        <input className="text-input" placeholder="Your E-mail..." ref={el => this.input = el} onChange={(e) => this.handleChange("email", e)} />
                        <button className="button" onClick={this.submitEmail}>GO!</button>
                    </div>
                </div>              
            </div>
		);
	}
}