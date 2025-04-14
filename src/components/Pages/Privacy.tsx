import { Helmet } from 'react-helmet-async'
import NavBar from './../NavBar'
import Footer from './../Footer'
import policies from './../../assets/policies.json'

const Privacy = () => {
    // Remove effective date from the first section's data
    const modifiedPolicies = {
        ...policies,
        sections: policies.sections.map((section, index) => {
            if (index === 0) {
                const modifiedData = section.data.replace(/<p><strong>Effective Date:<\/strong>.*?<\/p>/, '');
                return { ...section, data: modifiedData };
            }
            return section;
        })
    };

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

        <article className="min-h-screen w-full max-w-[900px] mx-auto px-4 md:px-8 py-12 animate-[fadeIn_0.4s_ease-out]">
            {/* Main Title */}
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-Jost mb-6">
                    Privacy Policy
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </header>

            {/* Table of Contents */}
            <nav className="mb-12 p-6 rounded-lg bg-black-background border border-primary">
                <h2 className="text-xl font-Jost text-primary mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-offwhite font-Poppins">
                    {modifiedPolicies.sections.map((section, index) => (
                        <li key={index} className="hover:text-primary transition-colors">
                            <a href={`#section-${index}`} className="hover:underline">
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Policy Sections */}
            {modifiedPolicies.sections.map((section, index) => (
                <section 
                    key={index}
                    id={`section-${index}`}
                    className="mb-12 scroll-mt-24"
                    style={{
                        animation: `fadeInUp 0.6s ease-out backwards`,
                        animationDelay: `${index * 0.1}s`
                    }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-Jost border-b border-primary/30 pb-2">
                        {section.title}
                    </h2>
                    <div 
                        className="text-offwhite font-Poppins leading-relaxed space-y-4 prose prose-invert prose-red max-w-none
                            prose-p:text-offwhite prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-primary prose-li:text-offwhite"
                        dangerouslySetInnerHTML={{ __html: section.data }}
                    />
                </section>
            ))}
        </article>

        <Footer />
    </>)
}

export default Privacy