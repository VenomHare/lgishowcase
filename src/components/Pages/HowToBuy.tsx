import { Helmet } from 'react-helmet-async'
import NavBar from '../NavBar'
import Footer from '../Footer'
import TicketCreation from './TicketCreation'

const HowToBuy = () => {
    return (
        <>
            <Helmet>
                <title>How to Buy | LGI Mods</title>
                <meta name="description" content="Learn how to purchase and access our game mods and patches. Simple step-by-step guide for buying mods from LGI Mods." />
                <meta name="keywords" content="buy mods, purchase patches, gaming modifications, LGI Mods store" />
                <meta property="og:title" content="How to Buy | LGI Mods" />
                <meta property="og:description" content="Learn how to purchase and access our game mods and patches. Simple step-by-step guide for buying mods from LGI Mods." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://lgimodz.vercel.app/howtobuy" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "How to Buy LGI Mods",
                            "description": "Step-by-step guide for purchasing mods and patches from LGI Mods",
                            "url": "https://lgimodz.vercel.app/howtobuy",
                            "step": [
                                {
                                    "@type": "HowToStep",
                                    "name": "Create Ticket",
                                    "text": "Create a purchase ticket to start the buying process"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Payment",
                                    "text": "Complete the payment process through our secure payment system"
                                },
                                {
                                    "@type": "HowToStep",
                                    "name": "Access",
                                    "text": "Get access to your purchased mods and patches"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>
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