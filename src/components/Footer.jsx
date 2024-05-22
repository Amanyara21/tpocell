import { Particle } from "@/utils/Particle";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="bg-footer">
                <Particle id="tsparticlesFooter"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="leftAddress">
                        <h5 className="foot-title mb-10" id="cu">
                            Contact Us
                        </h5>

                        <div className="flex gap-4 mb-8">
                            <FaMapMarkerAlt color="#a6720b" className="w-10 h-10" />&nbsp;<span>Room No. 230, 1ST FLOOR, T&P CELL, UIET KUK</span>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <FaPhoneAlt color="#a6720b" className="w-10 h-10" />
                            &nbsp;<a href="tel:9541653750">95416-53750</a>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <FaPhoneAlt color="#a6720b" className="w-10 h-10" />
                            &nbsp;<a href="tel:01744-238967">01744-238967</a>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <FaEnvelope color="#a6720b" className="w-10 h-10" />
                            &nbsp;<a href="mailto:tpouiet@kuk.ac.in">tpouiet@kuk.ac.in</a>
                        </div>
                    </div>
                    <div className="rightHandles" style={{ "textAlign": "center" }}>
                        <h5 className="foot-title">Follow Us</h5>
                        <ul className="social-media mb-8">
                            <li>
                                <a href="https://www.facebook.com/tnp.uietkuk/">
                                    <FaFacebookSquare color="#a6720b" className="w-[40px] h-[40px]" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/school/uietkurukshetra/">
                                    <FaLinkedin color="#a6720b" className="w-[40px] h-[40px]" />
                                </a>
                            </li>
                        </ul>
                        <h5 className="foot-title">Developed By</h5>
                        <a
                            href="https://www.linkedin.com/in/manish-kumar-332bbb255"
                            className="tdn"
                        >
                            <h6>
                                <p className="tdn1">&#128279;</p> Manish Kumar
                            </h6>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aman-kumar-aman2104"
                            className="tdn"
                        >
                            <h6>
                                <p className="tdn1">&#128279;</p> Aman Kumar
                            </h6>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samarjeet-singh-a14a47272"
                            className="tdn"
                        >
                            <h6>
                                <p className="tdn1">&#128279;</p> Samarjeet Singh
                            </h6>
                        </a>
                    </div>
                </div>
                <br />
                <br />
                <div className="row rowl">
                    <div className="copyright">
                        <p className="footer-text">
                            Copyright &copy; 2024 T&P Cell U.I.E.T KUK, Kurukshetra
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
