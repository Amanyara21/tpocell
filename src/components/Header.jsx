"use client"
import { Particle } from "@/utils/Particle";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
function Header() {
    return (
        <header className="header">
            <div className="bg-video">
                <div className="bg-video__content">
                    {/* <div id="particles-js1" style={{ height: '100vh', width: '100vw' }}> */}
                        <Particle id="tsparticles"/>
                    {/* </div> */}
                </div>
                <div className="header__logo-box">
                    <img src='./img/UIETblack.png' alt="Logo" className="header__logo" href="#" />
                </div>
            </div>
            <div className="header__text-box">
                <div className="heading-primary">
                    <span className="heading-primary--sub">
                        <TypeAnimation
                            sequence={[
                                'Welcome to',
                                1000,
                                'आपका स्वागत है',
                                1000,
                                'ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
                                1000,
                                'स्वागतम् अस्ति',
                                1000,
                                'میں خوش آمدید',
                                1000,
                                'আদৰণি',
                                1000,
                                'স্বাগতম',
                                1000,
                                'में राउर स्वागत बा',
                                1000,
                                'સ્વાગત',
                                1000,
                                'ಸುಸ್ವಾಗತ',
                                1000,
                                'अपनेक स्वागत अछि',
                                1000,
                                'Kan lo lawm a che',
                                1000,
                                'କୁ ସ୍ଵାଗତ',
                                1000,
                                'ڀليڪار ڪيون ٿا',
                                1000,
                                'வரவேற்கிறோம்',
                                1000,
                                'కు స్వాగతం',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                    <h1><span className="heading-primary--main pb-3">Training and Placement Cell</span></h1>
                    
                    <span className="heading-primary--sub">A constructive block of</span>
                    <span className="heading-primary--sub2">UIET, KUK</span>
                </div>
            </div>
        </header>
    );
}
export default Header