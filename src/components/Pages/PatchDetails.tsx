import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar';
import { ModList } from '../../../config/config';
import Footer from '../Footer';


const PatchDetails = () => {

    const { patch_id } = useParams();
    const patchData = ModList.find(mod => mod.id === patch_id);



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
                <link rel="canonical" href={`https://lgimodz.vercel.app/patches/${patch_id}`} />
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
            <div className=' w-full min-h-[70svh]'>
                
            </div>
            <Footer />
        </>
    )
}

export default PatchDetails