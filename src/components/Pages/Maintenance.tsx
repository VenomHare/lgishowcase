import { Helmet } from 'react-helmet-async'
import NavBar from "./../NavBar"
import { Unplug } from 'lucide-react'

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
        <div className="w-screen flex flex-col items-center justify-center min-h-[89vh] text-center p-8 bg-black animate-fadeIn">
            <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Unplug className="w-20 h-20 text-gray-500 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
                <h1 className="text-[12rem] font-extrabold m-0 text-red-500 shadow-lg animate-fadeIn delay-200">503</h1>
            </div>
            <h2 className="text-4xl font-semibold my-4 text-red-400 animate-fadeIn delay-400">Service Unavailable</h2>
            <p className="text-lg text-gray-400 my-6 max-w-xl leading-relaxed animate-fadeIn delay-600">
                We're currently performing scheduled maintenance to improve your experience.
                Our team is working hard to bring you back online as soon as possible.
                Please check back later!
            </p>
            <div className="flex gap-4 animate-fadeIn delay-800">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse delay-300"></div>
            </div>
        </div>
    </>)
}

export default Maintenance; 