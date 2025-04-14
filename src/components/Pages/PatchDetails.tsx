import { Helmet } from "react-helmet-async";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Config from "../../config/config";
import { Button, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { fetchYouTubeRSS } from "../showcase/utils";
import RosterBlock from "../Patches/RosterBlock";
import RosterLists from "../Patches/RosterLists";
import { useNavigate, useParams } from "react-router-dom";
import Brief from "../Patches/Brief";
import { ModPack, Video } from "../../types";
import Credits from "../Patches/Credits";



const PatchDetails = () => {
    const { modId } = useParams();
    const [videos, setVideos] = useState<Video[]>([]);
    const [mod, setMod] = useState<ModPack>(Config.ModList.find(mod => mod.id == modId)!);
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        const mod = Config.ModList.find(mod => mod.id == modId);
        if (mod)
        {
            setMod(mod);
        }
        else 
        {
            navigate("/404");
        }
        const fetchVideos = async () => {
            const data = await fetchYouTubeRSS(Config.modsShowasePlaylist.find(m=>m.id==modId)!.playlistId) as Video[]
            setVideos(data);
        }
        fetchVideos();
    }, [])


    return (
        <>
            <Helmet>
                <title>{mod?.name ? `${mod.name} | LGI Mods` : 'Patch Details | LGI Mods'}</title>
                <meta name="description" content={mod?.description || 'Detailed information about HCTP game patches and modifications.'} />
                <meta name="keywords" content={`${mod?.name}, HCTP patch, mod details, LGI Mods, wrestling game modifications`} />
                <meta property="og:title" content={mod?.name ? `${mod.name} | LGI Mods` : 'Patch Details | LGI Mods'} />
                <meta property="og:description" content={mod?.description || 'Detailed information about HCTP game patches and modifications.'} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={mod?.thumbnail || ''} />
                <link rel="canonical" href={`https://lgimodz.vercel.app/patches/limited`} />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "${mod?.name || 'HCTP Patch'}",
                            "description": "${mod?.description || 'HCTP game modification'}",
                            "applicationCategory": "Game Mod",
                            "offers": {
                                "@type": "Offer",
                                "price": "${mod?.Price}",
                                "priceCurrency": "USD",
                                "url": "${mod?.id == 'limited' ? 'https://lgicheckout.vercel.app/checkout/limited' : 'https://socialwolvez.com/app/l/uiwfZA'}"
                            },
                            "image": "${mod?.thumbnail || ''}",
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
                <div className="LimitedEditionInfo w-full min-h-[75svh] flex flex-col items-center p-4 gap-6">
                    <img src={mod?.thumbnail} alt="Thumbnail" className="w-[45svw] md:w-[20svw] lg:w-[10svw] object-center object-cover rounded-2xl shadow-md shadow-gray-800" />
                    <h1 className="text-4xl font-bold font-Jost flex  items-center gap-4">{mod?.name} <Credits mod={mod} /></h1>
                    <h2 className="text-md text-gray-400 w-[65%]">{mod?.description}</h2>
                    {
                        modId == "dynasty" && <>
                            <h5 className="text-4xl mt-10 font-bold font-Funnel text-primary">Launching Soon</h5>
                        </>
                    }
                    <h3 className="text-lg font-semibold text-gray-500">{modId=="dynasty"&&<>Pre Order </>}Price:  <span className="font-Jost text-offwhite text-4xl">{mod?.Price.price} {mod?.Price.name}</span></h3>
                    <Button className="w-[80%] md:w-[50%] lg:w-[50%]" color={"red"} size="lg">{modId == "dynasty" ?<>Pre Order </> : <>Buy</>} Now </Button>
                </div>
                <div className="LimitedEditionCarousel w-full lg:w-[50svw] min-h-[75svh] flex flex-col gap-6 items-center justify-center font-Jost">
                    <p className="text-3xl font-bold font-Funnel">Showcase Images</p>
                    <div className="w-[80%] aspect-video">
                        <Carousel pauseOnHover>
                            {
                                mod?.showcaseImgs.map((imgLink, i) =>
                                    <img src={imgLink} alt={"Image " + i} key={i} className="object-cover" />
                                )
                            }
                        </Carousel>
                    </div>
                </div>
                <RosterBlock title={mod?.name || ""}>
                    {
                        mod?.rosterListPath !== undefined ?
                            <RosterLists filepath={mod.rosterListPath} />
                            : <div>Roster Not Found</div>
                    }
                </RosterBlock>

                {
                    modId !== "deluxe" &&
                    <div className="LimitedEditionFeatures min-h-[50svh] ">
                        <Brief mod={mod} />
                    </div>
                }


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

export default PatchDetails