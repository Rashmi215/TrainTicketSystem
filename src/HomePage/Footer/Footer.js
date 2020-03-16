import React from 'react';
import './Footer.css';
 
export default function Footer(){
    return(
        <div className='footer'>
            <div class='footer-content'>
                <div class='footer-section'>
                    <ul>
                        <li>Trains</li>
                        <li>General Information</li>
                        <li>Important Information</li>
                        <li>Agents</li>
                        <li>Enquiries</li>
                    </ul>
                </div>
                <div class='footer-section'>
                    <ul>
                        <li>How To</li>
                        <li>Advertise with us</li>
                        <li>Refund Rules</li>
                        <li>Official App</li>
                        <li>Divyangjan Facilities</li>
                    </ul>
                </div>
                <div class='footer-section'>
                    <ul>
                        <li>eWallet</li>
                        <li>Loyalty Program</li>
                        <li>About us</li>
                        <li>Mobile zone</li>
                        <li>Integration Policy</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                &copy; mytraintickets.com | Designed by Rashmi
            </div>
        </div>    

    )
}