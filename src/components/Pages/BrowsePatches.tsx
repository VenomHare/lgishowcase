import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './../../styles/patches.css'
import Sorter from '../Sorter'
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
            <main className="min-h-[70svh]">
                <header className="mx-auto my-[1svh] w-[50svw] text-center">
                    <h1 className="font-Funnel font-semibold text-4xl lg:text-5xl">Browse Patches</h1>
                </header>

                <section className="flex justify-end flex-col items-center  ">
                    <Sorter tagList={PatchesTags} setSortingList={setSortedModList} sortingList={Patches} />
                    
                    <article className="w-[80svw] mr-[1svw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-[.5rem] gap-3 justify-items-center">
                        {sortedModList.map(mod => (
                            <PatchBlock 
                                key={mod.id}
                                mod={mod}
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