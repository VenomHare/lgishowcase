import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import '../styles/discord.css'
import { discordServerLink } from '../../config/config';

const JoinDiscordLarge = () => {
    return (
        <div className='LargeDiscordParent' onClick={()=>{window.open(discordServerLink, "_blank");}}>
            <div className="dclargeicon">
                <FaDiscord />
            </div>
            <div className="dclargetext">
                Join Our Discord Server
            </div>
            <div className="dclargeouticon">
            <IoOpenOutline />
            </div>
        </div>
    )
}

export default JoinDiscordLarge