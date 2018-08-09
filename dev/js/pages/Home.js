import React, { Component } from 'react';
import $ from 'jquery';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            infoMessage: "public/images/icons.png"
        }

        this.submitEmail = this.submitEmail.bind(this);
        this.onClickInfoOne = this.onClickInfoOne.bind(this);
        this.onClickInfoTwo = this.onClickInfoTwo.bind(this);
    }

    handleChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    isvalidEmail(input) {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailPattern.test(input);
    }

    onClickInfoOne() {
        this.setState({infoMessage: "public/images/info1.png"});
        this.scrollTo('framed');
    }

    onClickInfoTwo() {
        this.setState({infoMessage: "public/images/info2.png"});
        this.scrollTo('framed');
    }

    submitEmail() {
        var input = this.state.email;
        this.input.value = "";
        this.setState({email: ""});

        if(this.isvalidEmail(input)) {
            this.props.recordEmail(input);   
        }
        else {
            alert('Invalid email-address entered.');
        }
    }

    scrollTo(input) {
        var target = $('.' + input);

        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1000);
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
                            <div className="arrow" onClick={() => this.scrollTo('fortunate')}></div>
                            <div className="d-flex justify-content-around align-items-end">
                                <div className="framed">
                                    <img className="framed-image" src="public/images/group.jpg"/>
                                </div> 
                                <div className="framed">
                                    <img className="w-100" src={this.state.infoMessage}/>
                                </div>             
                                <div className="framed">
                                    <img className="framed-image" src="public/images/landscape.jpg"/>
                                </div>       
                            </div>       
                        </div>                    
                        <div className="section-bottom">
                            <div className="justify-content-center">
                                <div className="icon__container d-flex justify-content-center">
                                    <div className="one-half-rem icon__label">WE PROVIDE OUR VAN PARTNERS WITH TOP-OF-THE-RANGE CLIMBING GEAR</div>     
                                    <div className=""><img className="icon" src="public/images/info.svg" onClick={this.onClickInfoOne}></img></div>       
                                </div>        
                                <div className="icon__container d-flex justify-content-center">        
                                    <div className="one-half-rem icon__label">PRICELESS REGIONAL INFORMATION ON CLIMBING, CAMPING & LOTS MORE</div>       
                                    <div className=""><img className="icon" src="public/images/info.svg" onClick={this.onClickInfoTwo}></img></div>       
                                </div>        
                                <div className="icon__container one-half-rem icon__label">ALL READY FOR THE CLIMBER</div>       
                            </div>       
                            <div className="tent" onClick={() => this.scrollTo('framed')}></div>
                        </div>                    
                    </div>                    
                    <div className="section">
                        <div className="section-top">
                            <div className="arrow" onClick={() => this.scrollTo('band')}></div>
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
                            <div className="tent" onClick={() => this.scrollTo('fortunate')}></div>
                        </div>              
                    </div>              
                    <div className="section">
                        <div className="section-top">
                            <div className="arrow" onClick={() => this.scrollTo('subscribe')}></div>
                            <div className="band">
                                <div className="stripe"></div>
                                <div className="justify-content-center">
                                    <div className="subscribe__container">
                                        <img className="contact" src="public/images/contact.png"/>
                                        <img className="eligible" src="public/images/eligible.png"/>
                                        <div className="subscribe">
                                            <div className="input-label cv-buffer-right-50">I would love to hear more!</div>
                                            <input className="text-input" placeholder="Your E-mail..." ref={el => this.input = el} onChange={(e) => this.handleChange("email", e)} />
                                            <button className="button one-half-rem" onClick={this.submitEmail}>GO!</button>
                                        </div>
                                    </div>       
                                </div>       
                            </div>       
                        </div>              
                        <div className="section-bottom">
                            <div className="d-flex justify-content-center">
                                <div className="cv-buffer-top-40">
                                    <a href="https://www.facebook.com/pg/ClimbingVan-992487814255685" target="_blank()"><img className="social" src="public/images/fbook.png"/></a>
                                </div>
                                <div className="cv-buffer-top-40">
                                    <a href="https://www.instagram.com/climbing_van" target="_blank()"><img className="social" src="public/images/insta.png"/></a>
                                </div>
                                <div className="cv-buffer-top-40">
                                    <a href="mailto:info@climbingvan.com"><img className="social" src="public/images/mail.png"/></a>
                                </div>
                            </div>       
                            <div className="tent" onClick={() => this.scrollTo('band')}></div>
                        </div>    
                    </div>  
                    <div className="page-bottom">
                    </div>  
                </div>        
            </div>
		);
	}
}