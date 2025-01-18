import React, { useState } from 'react'
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
            <NavBar active='patches' />
            <div className="modsParent">
                <div className="modsTitleBlock">
                    <div className="modstitle">Browse Patches</div>
                </div>

                <div className="mods-content-container">
                    <div className="sorting">
                        <Sorter tagList={PatchesTags} setSortingList={setSortedModList} sortingList={Patches} />
                    </div>
                    <div className="mod-display-container">
                        {
                            sortedModList.map(mod => <>
                                <PatchBlock id={mod.id} title={mod.title} Tags={mod.tags} thumbnail={mod.thumbnail || ""} ytVideoLink={mod.ytvideoLink || ""} downloadLink={mod.downloadLink} credits={mod.credits||[]}/>
                            </>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BrowsePatches