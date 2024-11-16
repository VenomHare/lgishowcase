
/*
Download page
██████╗░░█████╗░░██╗░░░░░░░██╗███╗░░██╗██╗░░░░░░█████╗░░█████╗░██████╗░░██████╗  ██████╗░░█████╗░░██████╗░███████╗
██╔══██╗██╔══██╗░██║░░██╗░░██║████╗░██║██║░░░░░██╔══██╗██╔══██╗██╔══██╗██╔════╝  ██╔══██╗██╔══██╗██╔════╝░██╔════╝
██║░░██║██║░░██║░╚██╗████╗██╔╝██╔██╗██║██║░░░░░██║░░██║███████║██║░░██║╚█████╗░  ██████╔╝███████║██║░░██╗░█████╗░░
██║░░██║██║░░██║░░████╔═████║░██║╚████║██║░░░░░██║░░██║██╔══██║██║░░██║░╚═══██╗  ██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██████╔╝╚█████╔╝░░╚██╔╝░╚██╔╝░██║░╚███║███████╗╚█████╔╝██║░░██║██████╔╝██████╔╝  ██║░░░░░██║░░██║╚██████╔╝███████╗
╚═════╝░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚══╝╚══════╝░╚════╝░╚═╝░░╚═╝╚═════╝░╚═════╝░  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
*/
export type DownloadData = {
    title: string;
    description?: string;
    downloadLink : string;
    key?:string;
}
const DownloadPageData : DownloadData[] = [
    {
        title: "Afs_Extractor.rar",
        description:"Tools",
        downloadLink:" https://direct-link.net/1237994/download-afs-extractor"
    },
    {
        title: "AFSEXplorer.rar",
        description:"Tools",
        downloadLink:" https://direct-link.net/1237994/afsexplorer"
    },
    {
        title: "HxD.rar",
        description:"Tools",
        downloadLink:" https://link-hub.net/1237994/hxdrar"
    },
    {
        title: "ULTRA ISO",
        description:"Tools",
        downloadLink:" https://link-target.net/1237994/ultra-iso-premium"
    },
    {
        title: "Noesis.rar",
        description:"Tools",
        downloadLink:" https://direct-link.net/1237994/noesisrar"
    },
    {
        title: "Optpix_ImageStudio",
        description:"Tools",
        downloadLink:" https://link-target.net/1237994/optpix-imagestudio-v312"
    },
    {
        title: "SVR_Anim_UnRepacker",
        description:"Tools",
        downloadLink:" https://link-target.net/1237994/svr-anim-unrepacker-v35"
    },
    {
        title: "SVR_Anim_Editor",
        description:"Tools",
        downloadLink:" https://link-hub.net/1237994/svr-anim-editor-v7"
    },
    
]

/* 
Roster Page
██████╗░░█████╗░░██████╗████████╗███████╗██████╗░  ██████╗░░█████╗░░██████╗░███████╗
██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗  ██╔══██╗██╔══██╗██╔════╝░██╔════╝
██████╔╝██║░░██║╚█████╗░░░░██║░░░█████╗░░██████╔╝  ██████╔╝███████║██║░░██╗░█████╗░░
██╔══██╗██║░░██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗  ██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██║░░██║╚█████╔╝██████╔╝░░░██║░░░███████╗██║░░██║  ██║░░░░░██║░░██║╚██████╔╝███████╗
╚═╝░░╚═╝░╚════╝░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
 */
const rosterLimitedThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/3_skbost.png";
const rosterExclusiveThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/1_jk6u4z.png";
const rosterDeluxeThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317639/2_orgr2g.png";



/*
Home Page
██╗░░██╗░█████╗░███╗░░░███╗███████╗  ██████╗░░█████╗░░██████╗░███████╗
██║░░██║██╔══██╗████╗░████║██╔════╝  ██╔══██╗██╔══██╗██╔════╝░██╔════╝
███████║██║░░██║██╔████╔██║█████╗░░  ██████╔╝███████║██║░░██╗░█████╗░░
██╔══██║██║░░██║██║╚██╔╝██║██╔══╝░░  ██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██║░░██║╚█████╔╝██║░╚═╝░██║███████╗  ██║░░░░░██║░░██║╚██████╔╝███████╗
╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
*/
const BasicSliderImages = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png "
]

const BasicSliderThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/1_jk6u4z.png";

const LimitedSliderImages = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png "
]

const LimitedSliderThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317639/2_orgr2g.png"

const DeluxeSliderImages = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png "
]

const DeluxeSliderThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/3_skbost.png"

/*
Free Zone Page
███████╗██████╗░███████╗███████╗  ███████╗░█████╗░███╗░░██╗███████╗  ██████╗░░█████╗░░██████╗░███████╗
██╔════╝██╔══██╗██╔════╝██╔════╝  ╚════██║██╔══██╗████╗░██║██╔════╝  ██╔══██╗██╔══██╗██╔════╝░██╔════╝
█████╗░░██████╔╝█████╗░░█████╗░░  ░░███╔═╝██║░░██║██╔██╗██║█████╗░░  ██████╔╝███████║██║░░██╗░█████╗░░
██╔══╝░░██╔══██╗██╔══╝░░██╔══╝░░  ██╔══╝░░██║░░██║██║╚████║██╔══╝░░  ██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██║░░░░░██║░░██║███████╗███████╗  ███████╗╚█████╔╝██║░╚███║███████╗  ██║░░░░░██║░░██║╚██████╔╝███████╗
╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚══════╝  ╚══════╝░╚════╝░╚═╝░░╚══╝╚══════╝  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
*/


const FreeSliderimgs = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318452/1_smscsd.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318452/4_kfs2yu.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318451/3_ryq52v.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318453/2_fcvptp.png"
]

/**
Exclusive zone page
███████╗██╗░░██╗░█████╗░██╗░░░░░██╗░░░██╗░██████╗██╗██╗░░░██╗███████╗  ███████╗░█████╗░███╗░░██╗███████╗
██╔════╝╚██╗██╔╝██╔══██╗██║░░░░░██║░░░██║██╔════╝██║██║░░░██║██╔════╝  ╚════██║██╔══██╗████╗░██║██╔════╝
█████╗░░░╚███╔╝░██║░░╚═╝██║░░░░░██║░░░██║╚█████╗░██║╚██╗░██╔╝█████╗░░  ░░███╔═╝██║░░██║██╔██╗██║█████╗░░
██╔══╝░░░██╔██╗░██║░░██╗██║░░░░░██║░░░██║░╚═══██╗██║░╚████╔╝░██╔══╝░░  ██╔══╝░░██║░░██║██║╚████║██╔══╝░░
███████╗██╔╝╚██╗╚█████╔╝███████╗╚██████╔╝██████╔╝██║░░╚██╔╝░░███████╗  ███████╗╚█████╔╝██║░╚███║███████╗
╚══════╝╚═╝░░╚═╝░╚════╝░╚══════╝░╚═════╝░╚═════╝░╚═╝░░░╚═╝░░░╚══════╝  ╚══════╝░╚════╝░╚═╝░░╚══╝╚══════╝

██████╗░░█████╗░░██████╗░███████╗
██╔══██╗██╔══██╗██╔════╝░██╔════╝
██████╔╝███████║██║░░██╗░█████╗░░
██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██║░░░░░██║░░██║╚██████╔╝███████╗
╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
 */

const exclusivePackImage1 = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/3_x0ggaz.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/4_cck1wa.png"
]
const exclusivePackImage2 = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/1_cgknma.png",
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/2_hik9oi.png"
]
const exclusivePackImage3 = [
    "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/5_xnxr9y.png"
]


/**
 * 
███████╗░█████╗░░█████╗░████████╗███████╗██████╗░
██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
█████╗░░██║░░██║██║░░██║░░░██║░░░█████╗░░██████╔╝
██╔══╝░░██║░░██║██║░░██║░░░██║░░░██╔══╝░░██╔══██╗
██║░░░░░╚█████╔╝╚█████╔╝░░░██║░░░███████╗██║░░██║
╚═╝░░░░░░╚════╝░░╚════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝
 */
const smackLogo = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731677673/small_logo_hsm4qh.png"
const wwlogo = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731677110/wwlogo_ty4mwm.png"
const pslogo = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731677112/pslogo_yfcnky.png"

const lgiLogo = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731677195/Logo_square_y22rlr.png"

export {
    DownloadPageData,

    rosterLimitedThumbnail,
    rosterDeluxeThumbnail,
    rosterExclusiveThumbnail,

    BasicSliderImages,
    LimitedSliderImages,
    DeluxeSliderImages,
    BasicSliderThumbnail,
    LimitedSliderThumbnail,
    DeluxeSliderThumbnail,

    FreeSliderimgs,

    exclusivePackImage1,
    exclusivePackImage2,
    exclusivePackImage3,

    smackLogo,
    wwlogo,
    pslogo,
    lgiLogo,
}