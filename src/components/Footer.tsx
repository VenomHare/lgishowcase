import './../styles/footer.css'
import logo from './../assets/Logo_square.png'
import smack from './../assets/smacklogo.png'
import wwlogo from './../assets/wwlogo.png'
import pslogo  from './../assets/pslogo.png'
import { AiOutlineYoutube,AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TbBrandPaypal } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='footerparent' id='footer'>
            <div className='footerlinks'>
                <img src={logo} alt="lgi" className='footerlgi' />
                <a href="https://www.youtube.com/@lgiyt" target='blank' className='footlink'><AiOutlineYoutube className='footicon' /></a>
                <a href="https://instagram.com/lgi.yt" target='blank'  className='footlink'><FaInstagram className='footicon' /></a>
                <a href="https://paypal.me/88shadowIN" target='blank' className='footlink'><TbBrandPaypal className='footicon' /></a>
                <a href="https://discord.gg/dMzNNVuYv7" target='blank' className='footlink'><AiOutlineDiscord className='footicon' /></a>
            </div>
            <div className='footerlogos'>
                <img src={smack} alt="smack" className='footersmack' />
                <img src={wwlogo} alt="wwlogo" className='footersmack' />
                <img src={pslogo} alt="pslogo" className='footersmack' />

            </div>
        </div>
    )
}

export default Footer