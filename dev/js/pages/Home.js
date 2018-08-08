import React, { Component } from 'react';
import $ from 'jquery';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            infoMessage: null,
            showModal: false
        }

        this.submitEmail = this.submitEmail.bind(this);
        this.onClickInfoOne = this.onClickInfoOne.bind(this);
        this.onClickInfoTwo = this.onClickInfoTwo.bind(this);
        this.onClickMask = this.onClickMask.bind(this);
    }

    handleChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    isvalidEmail(input) {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailPattern.test(input);
    }

    onClickMask() {
        this.setState({showModal: false});
    }

    onClickInfoOne() {
        this.setState({infoMessage: "public/images/info1.png", showModal: true});
    }

    onClickInfoTwo() {
        this.setState({infoMessage: "public/images/info2.png", showModal: true});
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
                <div className="main">
                    <div className="section page-top">
                        <img className="logo" src="public/images/logo_subtext.png"/>  
                    </div>           
                    <div className="section">
                        <div className="section-top">
                            <div className="arrow"></div>
                            <div className="d-flex justify-content-around align-items-end">
                                <div className="framed">
                                    <img className="framed-image" src="public/images/group.jpg"/>
                                </div> 
                                <div className="framed">
                                    <img className="w-100" src="public/images/icons.png"/>
                                </div>             
                                <div className="framed">
                                    <img className="framed-image" src="public/images/landscape.jpg"/>
                                </div>       
                            </div>       
                        </div>                    
                        <div className="section-bottom">
                            <div className="">
                                <div className="icon__container d-flex justify-content-center">
                                    <div className="one-half-rem icon__label">WE PROVIDE OUR VAN PARTNERS WITH TOP-OF-THE-RANGE CLIMBING GEAR</div>     
                                    <img className="icon" src="public/images/info.svg" onClick={this.onClickInfoOne}></img>       
                                </div>        
                                <div className="icon__container d-flex justify-content-center">        
                                    <div className="one-half-rem icon__label">PRICELESS REGIONAL INFORMATION ON CLIMBING, CAMPING & LOTS MORE</div>       
                                    <img className="icon" src="public/images/info.svg" onClick={this.onClickInfoTwo}></img>       
                                </div>        
                                <div className="icon__container one-half-rem icon__label">ALL READY FOR THE CLIMBER</div>       
                            </div>       
                            <div className="tent"></div>
                        </div>                    
                    </div>                    
                    <div className="section">
                        <div className="section-top">
                            <div className="arrow"></div>
                            <div className="justify-content-center">
                                <img className="fortunate" src="public/images/partner.png"/>
                            </div>       
                        </div>              
                        <div className="section-bottom">
                            <div className="partner__container d-flex justify-content-center">
                                <div className="partner">
                                    <img className="partner-image" src="public/images/standout.png"/>
                                </div>       
                                <div className="partner">
                                    <img className="partner-image" src="public/images/vacancies.png"/>
                                </div>       
                                <div className="partner">
                                    <img className="partner-image" src="public/images/newmarkets.png"/>
                                </div>       
                            </div>       
                            <div className="tent"></div>
                        </div>              
                    </div>              
                    <div className="section">
                        <div className="section-top">
                            <div className="arrow"></div>
                            <div>
                                <div className="d-flex justify-content-center align-items-end cv-buffer-bottom-40">
                                    <div className="stripe"></div>
                                    <img className="contact cv-buffer-bottom-10" src="public/images/contact.png"/>
                                </div>
                                <div className="cv-buffer-bottom-40">
                                    <img className="w-25" src="public/images/eligible.png"/>
                                </div>
                                <div className="subscribe">
                                    <div className="input-label cv-buffer-right-50">I would love to hear more!</div>
                                    <input className="text-input" placeholder="Your E-mail..." ref={el => this.input = el} onChange={(e) => this.handleChange("email", e)} />
                                    <button className="button one-half-rem" onClick={this.submitEmail}>GO!</button>
                                </div>
                            </div>       
                        </div>              
                        <div className="section-bottom">
                            <div className="d-flex justify-content-center">
                                <div className="cv-buffer-top-40">
                                    <img className="social" src="public/images/fbook.png"/>
                                </div>
                                <div className="cv-buffer-top-40">
                                    <img className="social" src="public/images/insta.png"/>
                                </div>
                                <div className="cv-buffer-top-40">
                                    <img className="social" src="public/images/mail.png"/>
                                </div>
                            </div>       
                            <div className="tent"></div>
                        </div>    
                    </div>  
                    <div className="page-bottom">
                    </div>  
                </div>        
                {this.state.showModal ? (
                    <div>
                        <div className="modal__mask"></div>        
                        <div className="modal__container" onClick={this.onClickMask}>
                            <div className="modal__body">
                                <img className="modal__frame" src={this.state.infoMessage}/>
                            </div>        
                        </div>  
                    </div>  
                ) : (<div></div>)}
            </div>
		);
	}
}