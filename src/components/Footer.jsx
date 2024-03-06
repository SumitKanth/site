import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_left">
                    <WhatsAppIcon className="whatsup_icons"/>
                </div>

                <div className="footer_middle">
                    <nav>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Disclaimer</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer_right">
                    <TelegramIcon className="telegram_icons"/>
                </div>

            </div>
        </>
    )
}

export default Footer