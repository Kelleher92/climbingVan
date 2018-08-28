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

    componentDidMount() {
        $('.fb').on('click', function() {
            setTimeout(function () {
                $('<a href="https://www.facebook.com/pg/992487814255685" target="blank"></a>')[0].click();
            }, 25);    
            $('<a href="fb://pg/992487814255685" target="blank"></a>')[0].click();    
        });
    }

    handleChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    isvalidEmail(input) {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailPattern.test(input);
    }

    onClickInfoOne() {
        this.setState({infoMessage: "public/images/info-1.png"});
        this.scrollTo('keyframe');
    }

    onClickInfoTwo() {
        this.setState({infoMessage: "public/images/info-2.png"});
        this.scrollTo('keyframe');
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
            scrollTop: target.offset().top
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
                            <div className="arrow" onClick={() => this.scrollTo('together')}></div>
                            <div className="together">
                                <div className="icon__label">
                                    <img className="w-100" src="public/images/header.png"/>
                                </div>
                                <div className="framed__container">
                                    <div className="framed first">
                                        <div className="first"></div>
                                    </div> 
                                    <div className="framed second">
                                        <div className="second"></div>
                                    </div>             
                                    <div className="framed third">
                                        <div className="third"></div>
                                    </div>
                                    <div className="framed fourth">
                                        <div className="fourth"></div>
                                    </div>       
                                </div>         
                                <div className="desktop-only">
                                    <img className="w-20" src="public/images/hover.png"/>
                                </div>
                            </div>   
                        </div>              
                        <div className="section-top">
                            <div className="justify-content-center">
                                <img className="fortunate" src="public/images/partner.png"/>
                            </div>       
                            <div className="partner__container">
                                <div className="partner">
                                    <img className="partner-image" src="public/images/c1.png"/>
                                </div>       
                                <div className="partner">
                                    <img className="partner-image" src="public/images/c2.png"/>
                                </div>       
                                <div className="partner">
                                    <img className="partner-image" src="public/images/c3.png"/>
                                </div>       
                            </div>       
                        </div>              
                    </div>              
                    <div className="section">
                        <div className="section-top">
                            <div className="arrow" onClick={() => this.scrollTo('subscribe')}></div>
                            <div className="band">
                                <div className="stripe"></div>
                                <div className="justify-content-center">
                                    <div className="subscribe__container">
                                        <img className="contact" src="public/images/contact.png" onClick={() => this.scrollTo('subscribe')}/>
                                        <img className="eligible" src="public/images/eligible.png"/>
                                        <div className="subscribe">
                                            <div className="input-label">I would love to hear more!</div>
                                            <div>
                                                <input className="text-input" placeholder="Your E-mail..." ref={el => this.input = el} onChange={(e) => this.handleChange("email", e)} />
                                                <button className="button" onClick={this.submitEmail}>GO!</button>
                                            </div>
                                        </div>
                                    </div>       
                                </div>       
                            </div>       
                        </div>              
                        <div className="section-bottom">
                            <div className="d-flex justify-content-center">
                                <div className="cv-buffer-top-40">
                                    {/*<a className="fb"><img className="social" src="public/images/fbook.png"/></a>*/}
                                </div>
                                <div className="cv-buffer-top-40">
                                    {/*<a href="https://www.instagram.com/climbing_van" target="_blank()"><img className="social" src="public/images/insta.png"/></a>*/}
                                </div>
                                <div className="cv-buffer-top-40">
                                    {/*<a href="mailto:info@climbingvan.com"><img className="social" src="public/images/mail.png"/></a>*/}
                                </div>
                            </div>       
                            <div className="tent" onClick={() => this.scrollTo('together')}></div>
                        </div>    
                    </div>  
                    <div className="page-bottom">
                    </div>  
                </div>        
            </div>
		);
	}
}