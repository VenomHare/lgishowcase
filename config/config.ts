import LimitedListText from "./../src/assets/LimitedRosterNames.txt";
import DeluxeListText from "./../src/assets/DeluxeRosterNames.txt";
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
    downloadLink: string;
    key?: string;
}
const DownloadPageData: DownloadData[] = [
    {
        title: "Afs_Extractor.rar",
        description: "Tools",
        downloadLink: " https://direct-link.net/1237994/download-afs-extractor"
    },
    {
        title: "AFSEXplorer.rar",
        description: "Tools",
        downloadLink: " https://direct-link.net/1237994/afsexplorer"
    },
    {
        title: "HxD.rar",
        description: "Tools",
        downloadLink: " https://link-hub.net/1237994/hxdrar"
    },
    {
        title: "ULTRA ISO",
        description: "Tools",
        downloadLink: " https://link-target.net/1237994/ultra-iso-premium"
    },
    {
        title: "Noesis.rar",
        description: "Tools",
        downloadLink: " https://direct-link.net/1237994/noesisrar"
    },
    {
        title: "Optpix_ImageStudio",
        description: "Tools",
        downloadLink: " https://link-target.net/1237994/optpix-imagestudio-v312"
    },
    {
        title: "SVR_Anim_UnRepacker",
        description: "Tools",
        downloadLink: " https://link-target.net/1237994/svr-anim-unrepacker-v35"
    },
    {
        title: "SVR_Anim_Editor",
        description: "Tools",
        downloadLink: " https://link-hub.net/1237994/svr-anim-editor-v7"
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
const rosterLimitedThumbnail = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1732092081/HCTP_2k25_Limited_dmft4v.png";
const rosterExclusiveThumbnail = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731317640/1_jk6u4z.png";
const rosterDeluxeThumbnail = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1732092081/FRee_PATCH_p2q4nj.png";



/*
Home Page
██╗░░██╗░█████╗░███╗░░░███╗███████╗  ██████╗░░█████╗░░██████╗░███████╗
██║░░██║██╔══██╗████╗░████║██╔════╝  ██╔══██╗██╔══██╗██╔════╝░██╔════╝
███████║██║░░██║██╔████╔██║█████╗░░  ██████╔╝███████║██║░░██╗░█████╗░░
██╔══██║██║░░██║██║╚██╔╝██║██╔══╝░░  ██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██║░░██║╚█████╔╝██║░╚═╝░██║███████╗  ██║░░░░░██║░░██║╚██████╔╝███████╗
╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
*/
const WebsiteLogo = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1732126711/LGI_MODZ_blue_shadow_dh1jy2.png";

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
const smackLogo = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731758043/HCTP_logo_2_zoky6o.png"
const wwlogo = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731757741/wwe_logo_xx4aud.png"
const pslogo = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731757741/ps2_logo_huhowt.png"

const lgiLogo = "https://res.cloudinary.com/dl58zw1ey/image/upload/v1732130135/LGI_blue_shadow_oietni.png"

const discordServerLink = "https://discord.com/invite/dMzNNVuYv7";

/**
 * 
██████╗░██╗░░░██╗██████╗░░█████╗░██╗░░██╗░█████╗░░██████╗███████╗  ██████╗░░█████╗░░██████╗░███████╗
██╔══██╗██║░░░██║██╔══██╗██╔══██╗██║░░██║██╔══██╗██╔════╝██╔════╝  ██╔══██╗██╔══██╗██╔════╝░██╔════╝
██████╔╝██║░░░██║██████╔╝██║░░╚═╝███████║███████║╚█████╗░█████╗░░  ██████╔╝███████║██║░░██╗░█████╗░░
██╔═══╝░██║░░░██║██╔══██╗██║░░██╗██╔══██║██╔══██║░╚═══██╗██╔══╝░░  ██╔═══╝░██╔══██║██║░░╚██╗██╔══╝░░
██║░░░░░╚██████╔╝██║░░██║╚█████╔╝██║░░██║██║░░██║██████╔╝███████╗  ██║░░░░░██║░░██║╚██████╔╝███████╗
╚═╝░░░░░░╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═╝░░░░░╚═╝░░╚═╝░╚═════╝░╚══════╝
 */

const JoinDiscordImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731856331/JoinServer_bjddwc.png"
const VerifyImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731844992/verify_yidqxd.png"
const LocateChannelImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731845289/channel1_iyerst.png"
const CreateImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731845801/Create1_gmd6mx.png"
const OpenTicketImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731843630/ticket1_vsffnz.png"
const TicketViewImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731843630/ticket2_y8rics.png"
const CloseTicketImage = "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731849487/Close_mswfsk.png"

export type ModPack = {
    id: string,
    name: string;
    description?: string;
    isDiscounted: boolean;
    Discount: number;
    Price: number;
    thumbnail: string;
    showcaseImgs: string[],
    homeShowcase: boolean,
    rosterListPath?: string,
}

const ModList: ModPack[] = [
    {
        id: "basic",
        name: "Basic Pack",
        description: "",
        isDiscounted: true,
        Discount: 40,
        Price: 22,
        thumbnail: BasicSliderThumbnail,
        showcaseImgs: [
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png ",
        ],
        homeShowcase: false,
    },
    {
        id: "limited",
        name: "Limited Edition",
        description: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
        isDiscounted: true,
        Discount: 40,
        Price: 22,
        thumbnail: "https://res.cloudinary.com/dl58zw1ey/image/upload/v1732111832/LE_new_poster_pdw5ix.png",
        showcaseImgs: [
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964177/RR_-3_ofehz4.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964176/RR_-1_dkksch.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964175/Season_1_thmer3.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964173/Jeff_vs_Matt_2_j7cbdn.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964172/Season_2_yc1gcm.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964170/RR_2_bcqzfa.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964169/Jeff_vs_Matt_4_krs3ij.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964169/Jeff_vs_Matt_3_runrqy.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964168/Season_3_bh33bx.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964168/Jeff_vs_Matt_1_rcaj9n.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964165/gvs_g_3_anlnsa.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964163/gvs_g_2_u0afxg.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964163/gvs_g_e3xlja.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964103/Screenshot_273_prt1l2.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964100/Screenshot_263_mfmzka.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964085/Screenshot_298_ialfvq.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964071/Screenshot_297_qvz1bf.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964051/Screenshot_126_u2c7u3.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964044/Screenshot_135_xhckxq.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964031/Untitled1_lu9nsz.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964022/Untitled_4_xa55lh.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731964016/Untitled_wmdj24.jpg",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731963982/Screenshot_303_yy76sr.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731963981/Screenshot_293_f4er2l.png",
            "https://res.cloudinary.com/dl58zw1ey/image/upload/v1731963961/Screenshot_286_l9lqo7.png"
        ],
        homeShowcase: true,
        rosterListPath: LimitedListText,
    },
    {
        id: "exclusive",
        name: "Exclusive Pack",
        description: "",
        isDiscounted: true,
        Discount: 40,
        Price: 22,
        thumbnail: rosterExclusiveThumbnail,
        showcaseImgs: [
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png "
        ],
        homeShowcase: false,
    },
    {
        id: "deluxe",
        name: "Deluxe Edition",
        description: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
        isDiscounted: true,
        Discount: 40,
        Price: 10,
        thumbnail: "https://res.cloudinary.com/dl58zw1ey/image/upload/v1732092081/FRee_PATCH_p2q4nj.png",
        showcaseImgs: [
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png "
        ],
        homeShowcase: true,
        rosterListPath: DeluxeListText,
    }
]

export {
    DownloadPageData,

    rosterLimitedThumbnail,
    rosterDeluxeThumbnail,
    rosterExclusiveThumbnail,

    WebsiteLogo,
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
    discordServerLink,

    JoinDiscordImage,
    VerifyImage,
    LocateChannelImage,
    CreateImage,
    OpenTicketImage,
    TicketViewImage,
    CloseTicketImage,
    ModList,
}