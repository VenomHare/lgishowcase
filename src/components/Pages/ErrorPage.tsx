import { Helmet } from 'react-helmet-async'
import NavBar from "./../NavBar"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (<>
        <Helmet>
            <title>404 - Page Not Found | LGI Mods</title>
            <meta name="description" content="The page you are looking for could not be found. Please check the URL and try again." />
            <meta name="robots" content="noindex" />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "404 - Page Not Found",
                        "description": "The page you are looking for could not be found",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "404 Error",
                                "item": "https://lgimodz.vercel.app/404"
                            }]
                        }
                    }
                `}
            </script>
        </Helmet>
        <NavBar active='' />
        <div className="w-screen flex flex-col items-center justify-center min-h-[89vh] text-center p-8 bg-black animate-fadeIn">
            <h1 className="text-[12rem] font-extrabold m-0 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent shadow-lg animate-fadeIn delay-200">404</h1>
            <h2 className="text-4xl font-semibold my-4 text-red-600 animate-fadeIn delay-400">Page Not Found</h2>
            <p className="text-lg text-gray-500 my-6 max-w-xl leading-relaxed animate-fadeIn delay-600">
                Oops! The page you're looking for seems to have disappeared into the digital void.
                Don't worry, you can always return to our homepage and start fresh.
            </p>
            <Link to="/" className="inline-block py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white no-underline rounded-full font-semibold text-lg transition-all duration-300 ease-in-out relative overflow-hidden animate-fadeIn delay-800">
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                Return to Homepage
            </Link>
        </div>
    </>)
}

export default ErrorPage