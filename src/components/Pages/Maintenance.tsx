import { Helmet } from 'react-helmet-async'
import NavBar from "./../NavBar"
import { Unplug } from 'lucide-react'
import Config from '../../config/config'
import { IoOpenOutline } from "react-icons/io5"

const Maintenance = () => {
    return (<>
        <Helmet>
            <title>503 - Service Unavailable | LGI Mods</title>
            <meta name="description" content="Our website is currently undergoing maintenance. Please check back soon." />
            <meta name="robots" content="noindex" />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "503 - Service Unavailable",
                        "description": "Website is currently under maintenance",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "503 Error",
                                "item": "https://lgimodz.vercel.app/maintenance"
                            }]
                        }
                    }
                `}
            </script>
        </Helmet>
        <NavBar active='maintenance' isMaintenance={true} />
        <div className="w-screen flex flex-col items-center justify-center min-h-[89vh] text-center p-4 sm:p-6 md:p-8 bg-black animate-fadeIn">
            <div className="relative w-full max-w-4xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Unplug className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-500 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
                <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-extrabold m-0 text-red-500 shadow-lg animate-fadeIn delay-200">503</h1>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-2 sm:my-3 md:my-4 text-red-400 animate-fadeIn delay-400">Service Unavailable</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 my-4 sm:my-5 md:my-6 max-w-xl leading-relaxed animate-fadeIn delay-600 px-4">
                We're currently performing scheduled maintenance to improve your experience.
                Our team is working hard to bring you back online as soon as possible.
                Please check back later!
            </p>
            <div className="flex gap-3 sm:gap-4 animate-fadeIn delay-800 mb-6">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500 animate-pulse"></div>
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500 animate-pulse delay-300"></div>
            </div>
            <a 
                href={Config.discordServerLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white no-underline rounded-full font-semibold text-lg transition-all duration-300 ease-in-out relative overflow-hidden animate-fadeIn delay-1000 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
            >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                Join Discord
                <IoOpenOutline className="inline-block ml-2" />
            </a>
        </div>
    </>)
}

export default Maintenance; 