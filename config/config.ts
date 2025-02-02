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
const WebsiteLogo = "https://res.cloudinary.com/dn2mq5ezy/image/upload/v1738255095/LGI_MODZ_blue_shadow_nd1fgk_o8y8u8.png";

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

const Features = [
    "82 Wrestlers in Exhibition instead of 65 (including non-unlockable characters and Divas)",
    "75 Superstars playable in Season Mode",
    "Total 61 Titantrons, up from 43",
    "Total 125 Themes, compared to 72 previously",
    "All high-poly models now appear in Victory Motions!",
    "Updated Movesets with 180+ new moves, including converted and custom-made ones",
    "298+ Unique Attires",
    "Royal Rumble Finishers with cheats assigned to all 82 superstars",
    "Adjusted damage values for several moves, especially finishers",
    "New Themes and Titantrons added",
    "New Finisher Logos introduced",
    "Updated and restructured Stables",
    "Enhanced Renders for all superstars"
];


const Cons = [
    "With the roster hack, we can have 86 characters in Exhibition instead of just 65, but there are side effects.",
    "Members in stables cannot be changed; attempting to do so causes the game to freeze and an error to appear in the console.",
    "Certain wrestler IDs cause the pre-match model to appear too big or too small; this issue is related to the ID.",
    "Some wrestler IDs also affect the size of the belt during entrances, making it appear too big or small, though most are normal."
];

const Arena = [
    "Smackdown 1",
    "Smackdown Oval",
    "Raw 1",
    "Raw 2",
    "NXT",
    "WrestleMania XL",
    "Royal Rumble 24",
    "Elimination Chamber",
    "WrestleMania XX",
    "Backlash",
    "Judgement Day",
    "King of the Ring XI",
    "WCW Nitro",
    "Summer Slam",
    "Unforgiven",
    "King Of Sports",
    "Survivor Series",
    "Night Of Champion",
    "ECW",
    "WrestleMania X8",
    "Many Hidden Arenas playable through cheats"
];



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
const smackLogo = "https://res.cloudinary.com/dn2mq5ezy/image/upload/v1738255098/HCTP_logo_2_s34tft_m0up2d.png"
const wwlogo = "https://res.cloudinary.com/dn2mq5ezy/image/upload/v1738255094/wwe_logo_hckvyf_weq8hb.png"
const pslogo = "https://res.cloudinary.com/dn2mq5ezy/image/upload/v1738255096/ps2_logo_vgvkvc_bb0d4a.png"

const lgiLogo = "https://res.cloudinary.com/dn2mq5ezy/image/upload/v1738255095/LGI_square_logo_golfzm_gb7hzb.png"

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

const LimitedPackImages = [
    "../public/img/limtedimg/1.jpg",
    "../public/img/limtedimg/2.jpg",
    "../public/img/limtedimg/3.jpg",
    "../public/img/limtedimg/4.png",
    "../public/img/limtedimg/5.jpg",
    "../public/img/limtedimg/6.jpg",
    "../public/img/limtedimg/7.png",
    "../public/img/limtedimg/8.jpg",
    "../public/img/limtedimg/9.png",
    "../public/img/limtedimg/10.jpg",

    
]

export type CurrencyOptions = {
    id: string;
    name: string;
    price: number;
}


export type ModPack = {
    id: string,
    name: string;
    description?: string;
    patchnotes?: string;
    isDiscounted: boolean;
    Discount: number;
    Price: CurrencyOptions[];
    thumbnail: string;
    showcaseImgs: string[],
    homeShowcase: boolean,
    rosterListPath?: string,
}



const ModList: ModPack[] = [
    {
        id: "limited",
        name: "Limited Edition",
        description: "The patch features an expanded roster with 82 wrestlers in Exhibition Mode (up from 65) and 80 superstars playable in Season Mode. Enhanced visuals and content include high-poly models in Victory Motions, updated movesets with over 180 new moves, 298+ unique attires, 61 Titantrons, and 125 themes. Additionally, Royal Rumble finishers with cheats are available for all 82 superstars. Game adjustments include refined damage values for several finishers, the introduction of new finisher logos, and updated/restructured stables to enhance the gameplay experience.",
        patchnotes: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
        isDiscounted: true,
        Discount: 40,
        Price:[
            {
                id: "usd",
                name: "USD",
                price: 25,
            },
            {
                id: "eur",
                name: "EUR",
                price: 25,
            },
            {
                id: "inr",
                name: "INR",
                price: 1800,
            },
            {
                id: "sgd",
                name: "SGD",
                price: 38,
            },
            {
                id: "cad",
                name: "CAD",
                price: 38,
            },
            {
                id: "idr",
                name: "IDR",
                price: 400000,
            },
            {
                id: "php",
                name: "PHP",
                price: 1450,
            },
            {
                id: "egp",
                name: "EGP",
                price: 1300,
            },
        ],
        thumbnail: "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216311/LE_new_poster_g62skt.png",
        showcaseImgs: LimitedPackImages,
        homeShowcase: true,
        rosterListPath: LimitedListText,
    },
    {
        id: "deluxe",
        name: "Deluxe Edition",
        description: "",
        patchnotes: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
        isDiscounted: false,
        Discount: 40,
        Price: [
            {
                id: "usd",
                name: "USD",
                price: 0,
            },
            {
                id: "eur",
                name: "EUR",
                price: 0,
            },
            {
                id: "inr",
                name: "INR",
                price: 0,
            },
        ],
        thumbnail: "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216310/FRee_PATCH_cgzaic.png",
        showcaseImgs: [
            "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216661/DE_2_psrfq5.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/2_tpwk4c.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318153/1_gyfgdh.png ",
            "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216458/DE_2_xq3m1u.jpg",
            "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216458/DE_4_eqmf8i.jpg",
            "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216458/DE_3_uhgizv.jpg",
            "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216586/DE_e9wwob.png",
        ],
        homeShowcase: true,
        rosterListPath: DeluxeListText,
    }
]

export type SortingModPack = {
    id: string;
    title: string;
    thumbnail?: string;
    tags: string[];
    imagesURL: string[];
    downloadLink: string;
    ytvideoLink?: string;
    credits?: string[];
}

const TagsList: string[] = [
    "free",
    "paid",
    "2K25",
]

const BrowseModsList: SortingModPack[] = [
    {
        id: "free1",
        title: "",
        tags: ["2K25", "free"],
        imagesURL: [
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318452/1_smscsd.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318452/4_kfs2yu.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318451/3_ryq52v.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731318453/2_fcvptp.png"
        ],
        downloadLink: discordServerLink
    },
    {
        id: "exclusive1",
        title: "",
        tags: ["2K25", "paid"],
        imagesURL: [
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/3_x0ggaz.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/4_cck1wa.png"
        ],
        downloadLink: discordServerLink
    },
    {
        id: "exclusive2",
        title: "",
        tags: ["2K25", "paid"],
        imagesURL: [
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/1_cgknma.png",
            "https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/2_hik9oi.png"
        ],
        downloadLink: discordServerLink
    },
    {
        id: "exclusive3",
        title: "",
        tags: ["2K25", "paid"],
        imagesURL: ["https://res.cloudinary.com/dzgbkv34a/image/upload/v1731358647/5_xnxr9y.png"],
        downloadLink: discordServerLink
    },
]

const PatchesTags: string[] = [
    "free",
    "paid",
    "Limited Edition",
    "Deluxe Edition"
]

const Patches: SortingModPack[] = [
    {
        id: "limited",
        title: "Limited Edition Pack",
        tags: ["paid", "Limited Edition"],
        imagesURL: [],
        thumbnail: "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216311/LE_new_poster_g62skt.png",
        downloadLink: discordServerLink,
        ytvideoLink: "https://youtube.com/@lgiyt",
        credits: [
            "Aguila316 (Tools,Mods)",
            "Ps2 eater (Mods) @ps2eater",
            "Nero619 (Tools)",
            "ERI619 (Tools)",
            "a7med7assan5 (Mods,Cheats,Movesets,Render and texture) @a7med7assan5",
            "Erm31 (Tools)",
            "Modding Generation (Mods,Arenas,Render and texture) @ModdingGenerationOfficial",
            "Angry game show (Mods,moves,Render and texture) @angrygamershow848",
            "Ryukuuma (Mods) @Ryukuuma",
            "Ranjay (Arenas) @ranjay12",
            "THQ (Base Game)",
            "JAKKS (Base Game)"
        ]
    },
    {
        id: "deluxe",
        title: "Deluxe Edition Pack",
        tags: ["free", "Deluxe Edition"],
        imagesURL: [],
        thumbnail: "https://res.cloudinary.com/dbc7lvsvh/image/upload/v1735216310/FRee_PATCH_cgzaic.png",
        downloadLink: discordServerLink,
        ytvideoLink: "https://youtube.com/@lgiyt",
        credits: [
            "Aguila316 (Tools,Mods)",
            "Ps2 eater (Mods) @ps2eater",
            "Nero619 (Tools)",
            "ERI619 (Tools)",
            "a7med7assan5 (Mods,Cheats,Movesets,Render and texture) @a7med7assan5",
            "Erm31 (Tools)",
            "Modding Generation (Mods,Arenas,Render and texture) @ModdingGenerationOfficial",
            "Angry game show (Mods,moves,Render and texture) @angrygamershow848",
            "Ryukuuma (Mods) @Ryukuuma",
            "Ranjay (Arenas) @ranjay12",
            "THQ (Base Game)",
            "JAKKS (Base Game)"
        ]
    },
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
    Features,
    Cons,
    Arena,

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

    BrowseModsList,
    TagsList,

    Patches,
    PatchesTags,
}