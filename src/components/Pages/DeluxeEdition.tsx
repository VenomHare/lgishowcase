import { Button, Carousel } from "flowbite-react"
import Brief from "../Brief"
import Footer from "../Footer"
import RosterBlock from "../RosterBlock"
import { Helmet } from "react-helmet-async"
import Config, { ModList, Video } from "../../../config/config"
import { useEffect, useState } from "react"
import { fetchYouTubeRSS } from "../utils"
import NavBar from "../NavBar"
import RosterLists from "../RosterLists"

const DeluxeEdition = () => {

    const patchData = ModList.find(mod => mod.id === "deluxe");
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const data = await fetchYouTubeRSS(Config.LimitedPlaylistId) as Video[]
            setVideos(data);
        }
        fetchVideos();
    }, [])

    return (
        <>
            <Helmet>
                <title>{patchData?.name ? `${patchData.name} | LGI Mods` : 'Patch Details | LGI Mods'}</title>
                <meta name="description" content={patchData?.description || 'Detailed information about HCTP game patches and modifications.'} />
                <meta name="keywords" content={`${patchData?.name}, HCTP patch, mod details, LGI Mods, wrestling game modifications`} />
                <meta property="og:title" content={patchData?.name ? `${patchData.name} | LGI Mods` : 'Patch Details | LGI Mods'} />
                <meta property="og:description" content={patchData?.description || 'Detailed information about HCTP game patches and modifications.'} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={patchData?.thumbnail || ''} />
                <link rel="canonical" href={`https://lgimodz.vercel.app/patches/limited`} />
                <script type="application/ld+json">
                    {`
                {
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "${patchData?.name || 'HCTP Patch'}",
                    "description": "${patchData?.description || 'HCTP game modification'}",
                    "applicationCategory": "Game Mod",
                    "offers": {
                        "@type": "Offer",
                        "price": "${patchData?.Price}",
                        "priceCurrency": "USD",
                        "url": "${patchData?.id == 'limited' ? 'https://lgicheckout.vercel.app/checkout/limited' : 'https://socialwolvez.com/app/l/uiwfZA'}"
                    },
                    "image": "${patchData?.thumbnail || ''}",
                    "author": {
                        "@type": "Organization",
                        "name": "LGI Mods"
                    }
                }
            `}
                </script>
            </Helmet>


            <NavBar active='patchdetails' />
            <div className='LimitedEditionGrid w-full min-h-[70svh]'>
                <div className="LimitedEditionInfo w-full lg:w-[50svw] min-h-[75svh] flex flex-col items-center p-4 gap-6">
                    <img src={patchData?.thumbnail} alt="Thumbnail" className="w-[45svw] md:w-[20svw] lg:w-[10svw] object-center object-cover rounded-2xl shadow-md shadow-gray-800" />
                    <h1 className="text-4xl font-bold font-Jost">{patchData?.name}</h1>
                    <h2 className="text-md text-gray-400">{patchData?.description}</h2>
                    <h3 className="text-lg font-semibold text-gray-500">Price:  <span className="font-Jost text-offwhite text-4xl">{patchData?.Price.price} {patchData?.Price.name}</span></h3>
                    <Button className="w-[80%] " color={"red"} size="lg">Buy Now </Button>
                </div>
                <div className="LimitedEditionCarousel w-full lg:w-[50svw] min-h-[75svh] flex flex-col gap-6 items-center justify-center font-Jost">
                    <p className="text-3xl">Showcase Images</p>
                    <div className="w-[80%] aspect-video">
                        <Carousel pauseOnHover>
                            {
                                patchData?.showcaseImgs.map((imgLink, i) =>
                                    <img src={imgLink} alt={"Image " + i} key={i} className="object-cover" />
                                )
                            }
                        </Carousel>
                    </div>
                </div>

                <RosterBlock title={patchData?.name || ""}>
                    {
                        patchData?.rosterListPath !== undefined ?
                            <RosterLists filepath={patchData.rosterListPath} />
                            : <div>Roster Not Found</div>
                    }
                </RosterBlock>

                <div className="LimitedEditionFeatures min-h-[50svh] ">
                    <Brief />
                </div>

                <div className="LimitedEditionVideos min-h-[50svh] w-full flex flex-col items-center">
                    <p className="text-5xl font-semibold font-Jost my-5">Showcase Videos</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] lg:grid-cols-3 gap-6 justify-items-center my-6">
                        {
                            videos.map((video, i) => <div key={i} className={`
                        w-full flex flex-col items-center shadow-md shadow-gray-400/40 rounded-xl overflow-clip 
                        cursor-pointer lg:w-[25svw] shrink-0 
                    `} onClick={() => window.open(video.link)}>
                                <img src={video.thumbnail} alt={"Thumbnail " + i} className='object-contain max-h-[90%] lg:max-h-full lg:max-w-full' />
                                <p className='text-md px-6 py-3 font-semibold font-Jost text-offwhite'>{video.title}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DeluxeEdition