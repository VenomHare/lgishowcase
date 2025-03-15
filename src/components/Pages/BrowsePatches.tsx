import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './../../styles/patches.css'
import Sorter from '../Sorter'
import DisplayBlock from '../DisplayBlock'
import { Patches, PatchesTags } from '../../../config/config'
import PatchBlock from '../PatchBlock'

import "./../../styles/patches.css"

const BrowsePatches = () => {

    const [sortedModList, setSortedModList] = useState(Patches);

    return (
        <>
            <Helmet>
                <title>Browse Patches | LGI Mods</title>
                <meta name="description" content="Explore and download HCTP game patches. Find patches for various features including roster updates, graphics improvements, and gameplay modifications." />
                <meta name="keywords" content="HCTP patches, wrestling game patches, gaming modifications, LGI Mods" />
                <meta property="og:title" content="Browse Patches | LGI Mods" />
                <meta property="og:description" content="Explore and download HCTP game patches. Find patches for various features including roster updates, graphics improvements, and gameplay modifications." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://lgimodz.vercel.app/patches" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "HCTP Game Patches",
                            "description": "Collection of patches for HCTP game modifications",
                            "url": "https://lgimodz.vercel.app/patches",
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
            <NavBar active='patches' />
            <main className="modsParent">
                <header className="modsTitleBlock">
                    <h1 className="modstitle">Browse Patches</h1>
                </header>

                <section className="mods-content-container">
                    <aside className="sorting">
                        <Sorter tagList={PatchesTags} setSortingList={setSortedModList} sortingList={Patches} />
                    </aside>
                    
                    <article className="mod-display-container">
                        {sortedModList.map(mod => (
                            <PatchBlock 
                                key={mod.id}
                                id={mod.id} 
                                title={mod.title} 
                                Tags={mod.tags} 
                                thumbnail={mod.thumbnail || ""} 
                                ytVideoLink={mod.ytvideoLink || ""} 
                                downloadLink={mod.downloadLink} 
                                credits={mod.credits||[]}
                            />
                        ))}
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default BrowsePatches