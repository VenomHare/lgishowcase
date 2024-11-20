import './../styles/footer.css'
import { AiOutlineYoutube,AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPaypal } from "react-icons/tb";
import { lgiLogo, pslogo, smackLogo, wwlogo } from '../../config/config';

const Footer = () => {
    return (
        <div className='footerparent' id='footer'>
            <div className='footerlinks'>
                <div className='socials'>
                    <a href="https://www.youtube.com/@lgiyt" target='blank' className='footlink'><AiOutlineYoutube/>Youtube</a>
                    <a href="https://instagram.com/lgi.yt" target='blank'  className='footlink'><FaInstagram/>Instagram</a>
                    <a href="https://paypal.me/88shadowIN" target='blank' className='footlink'><TbBrandPaypal/>Paypal</a>
                    <a href="https://discord.gg/dMzNNVuYv7" target='blank' className='footlink'><AiOutlineDiscord/>Discord</a>                
                </div>
                <a href="/policies" className='footlink' id='privacyBtn'>Privacy Polices & Terms of Use</a>                
            </div>
            <div className='footerlogos'>
                <img src={lgiLogo} alt="lgi" className='footerlogo' />
                <img src={smackLogo} alt="smack" className='footerlogo' />
                <img src={wwlogo} alt="wwlogo" className='footerlogo' />
                <img src={pslogo} alt="pslogo" className='footerlogo' />
            </div>
        </div>
    )
}

export default Footer