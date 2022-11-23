import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import bigLogo from "../../asset/sawadika_500_250.png"

import "./Footer.css"

export default function Footer() {
    const buttonWords = ["ดูหนังออนไลน์ฟรี", "ดูหนังฟรีฟรี", "ดูซีรี่ย์ฟรี", "netflix", "ไม่มีโฆษณา", "อัปเดตหนัง 2022"]

    return (
        <div className="container">
            <div className="Footer d-flex">
                <div className="FooterLogoContainer 
                d-flex 
                flex-column 
                me-auto 
                ">
                    <Navbar.Brand href="#home"><img className='bigLogo mb-3' src={bigLogo}></img></Navbar.Brand>
                    <p className='footerText'> ดูหนังฟรี ไม่มีโฆษณา.</p>
                    <p className='footerText'>Copyright 2022All Right Reserved.</p>
                </div>
                <div className="FooterBTNContainer d-flex justify-content-between align-items-center">
                    {
                        Array.from(buttonWords).map((word) => (
                            <button type='button' className='btn btn-outline-danger'>{word}</button>
                        ))
                    }


                </div>

            </div>
        </div>
    );
}