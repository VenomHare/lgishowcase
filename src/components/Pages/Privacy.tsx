import { Helmet } from 'react-helmet-async'
import NavBar from './../NavBar'
import Footer from './../Footer'

const Privacy = () => {
    return (<>
        <Helmet>
            <title>Privacy Policy | LGI Mods</title>
            <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information at LGI Mods." />
            <meta name="keywords" content="privacy policy, data protection, user privacy, LGI Mods policies" />
            <meta property="og:title" content="Privacy Policy | LGI Mods" />
            <meta property="og:description" content="Read our privacy policy to understand how we collect, use, and protect your personal information at LGI Mods." />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://lgimodz.vercel.app/policies" />
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Privacy Policy",
                        "description": "Privacy policy and data protection information for LGI Mods",
                        "url": "https://lgimodz.vercel.app/policies",
                        "mainEntity": {
                            "@type": "WebContent",
                            "about": {
                                "@type": "Thing",
                                "name": "Privacy Policy",
                                "description": "Information about how we collect, use, and protect user data"
                            },
                            "dateModified": "2024-10-20"
                        }
                    }
                `}
            </script>
        </Helmet>
        <NavBar active='policies' />

        <Footer />
    </>
    )
}

export default Privacy