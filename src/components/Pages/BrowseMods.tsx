import React, { useEffect, useState } from 'react'
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
            <NavBar active='mods' />
            <div className="modsParent">
                <div className="modsTitleBlock">
                    <div className="modstitle">Browse Mods</div>
                </div>

                <div className="mods-content-container">
                    <div className="sorting">
                        <Sorter tagList={TagsList} setSortingList={setSortedModList} sortingList={BrowseModsList} />
                    </div>
                    <div className="mod-display-container">
                        {
                            sortedModList.map(mod => <>
                                <div className='mod-container'>
                                    <DisplayBlock tags={mod.tags} imgURLs={mod.imagesURL} ButtonText='Download' onClick={() => openDiscord(mod.downloadLink)} title={mod.title} />
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BrowseMods