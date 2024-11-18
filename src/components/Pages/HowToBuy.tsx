import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import TicketCreation from '../TicketCreation'
import "./../../styles/howtobuy.css"

const HowToBuy = () => {
    return (
        <>
            <div className="HowToBuyParent">
                <NavBar active='' />
                <div className="center-content-container">
                    <TicketCreation />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default HowToBuy