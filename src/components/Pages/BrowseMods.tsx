import  {  useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../NavBar'
import Footer from '../Footer'
import ModsDisplayBlock from '../Patches/ModsDisplayBlock'
import Config from '../../config/config'
import Sorter from '../Patches/Sorter'

const BrowseMods = () => {
    const [sortedModList, setSortedModList] = useState(Config.BrowseModsList);

    return (
        <>
            <Helmet>
                <title>Browse Mods | LGI Mods</title>
                <meta name="description" content="Discover and download HCTP game mods. Browse our collection of mods featuring roster updates, enhanced graphics, improved gameplay mechanics, and more." />
                <meta name="keywords" content="HCTP mods, wrestling game mods, mod downloads, LGI Mods, wrestling roster updates" />
                <meta property="og:title" content="Browse Mods | LGI Mods" />
                <meta property="og:description" content="Discover and download HCTP game mods. Browse our collection of mods featuring roster updates, enhanced graphics, improved gameplay mechanics, and more." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://lgimodz.vercel.app/mods" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "HCTP Game Mods",
                            "description": "Collection of mods for HCTP game",
                            "url": "https://lgimodz.vercel.app/mods",
                            "hasPart": ${JSON.stringify(sortedModList.map(mod => ({
                                "@type": "SoftwareApplication",
                                "name": mod.title,
                                "applicationCategory": "Game Mod",
                                "offers": {
                                    "@type": "Offer",
                                    "url": mod.downloadLink
                                }
                            })))}
                        }
                    `}
                </script>
            </Helmet>

            <NavBar active='mods' />
            
            <main className="min-h-[70svh]">
                <header className="mx-auto my-[1svh] w-[50svw] text-center">
                    <h1 className="font-Funnel font-semibold text-4xl lg:text-5xl">Browse Mods</h1>
                </header>

                <section className="flex justify-end flex-col items-center  ">
                        <Sorter tagList={Config.TagsList} setSortingList={setSortedModList} sortingList={Config.BrowseModsList} />
                    
                    <article className="w-[80svw] mr-[1svw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-[.5rem] gap-3 justify-items-center">
                        {sortedModList.map(mod => (
                            <ModsDisplayBlock mod={mod} key={mod.id} />
                        ))}
                    </article>
                </section>
            </main>
            
            <Footer />
        </>
    )
}

export default BrowseMods