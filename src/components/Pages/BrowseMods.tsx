import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './../../styles/mods.css'
import DisplayBlock from '../DisplayBlock'
import { BrowseModsList, TagsList } from '../../../config/config'
import Sorter from '../Sorter'

const BrowseMods = () => {
    const openDiscord = (link: string) => window.open(link);
    const [sortedModList, setSortedModList] = useState(BrowseModsList);

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
            
            <main className="modsParent">
                <header className="modsTitleBlock">
                    <h1 className="modstitle">Browse Mods</h1>
                </header>

                <section className="mods-content-container">
                    <aside className="sorting">
                        <Sorter tagList={TagsList} setSortingList={setSortedModList} sortingList={BrowseModsList} />
                    </aside>
                    
                    <article className="mod-display-container">
                        {sortedModList.map(mod => (
                            <div key={mod.id} className='mod-container'>
                                <DisplayBlock 
                                    id={mod.id}
                                    tags={mod.tags} 
                                    imgURLs={mod.imagesURL} 
                                    ButtonText='Download' 
                                    onClick={() => openDiscord(mod.downloadLink)} 
                                    title={mod.title} 
                                />
                            </div>
                        ))}
                    </article>
                </section>
            </main>
            
            <Footer />
        </>
    )
}

export default BrowseMods