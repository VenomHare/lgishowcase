import LimitedListText from "./../assets/LimitedRosterNames.txt";
import DeluxeListText from "./../assets/DeluxeRosterNames.txt";



const LimitedFeatures = [
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


const LimitedCons = [
    "With the roster hack, we can have 86 characters in Exhibition instead of just 65, but there are side effects.",
    "Members in stables cannot be changed; attempting to do so causes the game to freeze and an error to appear in the console.",
    "Certain wrestler IDs cause the pre-match model to appear too big or too small; this issue is related to the ID.",
    "Some wrestler IDs also affect the size of the belt during entrances, making it appear too big or small, though most are normal."
];

const LimitedArena = [
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


const DynastyFeatures = [
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


const DynastyCons = [
    "With the roster hack, we can have 86 characters in Exhibition instead of just 65, but there are side effects.",
    "Members in stables cannot be changed; attempting to do so causes the game to freeze and an error to appear in the console.",
    "Certain wrestler IDs cause the pre-match model to appear too big or too small; this issue is related to the ID.",
    "Some wrestler IDs also affect the size of the belt during entrances, making it appear too big or small, though most are normal."
];

const DynastyArena = [
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

const discordServerLink = "https://discord.com/invite/dMzNNVuYv7";



const Config = {
    WebsiteLogo: "/img/header/lgimodz.png",
    JoinDiscordImage: "/img/discord/JoinServer.png",
    VerifyImage: "/img/discord/verify.png",
    LocateChannelImage: "/img/discord/channel1.png",
    CreateImage: "/img/discord/Create1.png",
    OpenTicketImage: "/img/discord/ticket1.png",
    TicketViewImage: "/img/discord/ticket2.png",
    CloseTicketImage: "/img/discord/Close.png",

    playlistId: "PLcz4DKrECTOcEXrasX7nZu43MErW2wtkK",

    modsShowasePlaylist: [
        {
            id: "limited",
            playlistId: "PLcz4DKrECTOegQXsvTXRSuwNDB5TQPPbx"
        },
        {
            id: "deluxe",
            playlistId: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi"
        },
        {
            id: "dynasty",
            playlistId: "PLcz4DKrECTOfWuM_cncBCYxqC_7mBrS1H"
        },
    ],

    discordServerLink,

    FooterImgs: [
        {
            alt: "lgi",
            src: "/img/footer/lgi.png"
        },
        {
            alt: "smack",
            src: "/img/footer/htcp.png"
        },
        {
            alt: "wwelogo",
            src: "/img/footer/wwe.png"
        },
        {
            alt: "pslogo",
            src: "/img/footer/ps2.png"
        },
        {
            alt: "lgixps2",
            src: "/img/footer/lgixps2.png"
        },
        {
            alt: "pcxaethrsx2",
            src: "/img/footer/pcxaethrsx2.png"
        },
    ],
    footerSocials: {
        youtube: "https://www.youtube.com/@lgiyt",
        instagram: "https://instagram.com/lgi.yt",
        paypal: "https://paypal.me/88shadowIN",
        discord: "https://discord.com/invite/dMzNNVuYv7"
    },


    ModList: [
        {
            id: "limited",
            name: "Limited Edition",
            description: "The patch features an expanded roster with 82 wrestlers in Exhibition Mode (up from 65) and 80 superstars playable in Season Mode. Enhanced visuals and content include high-poly models in Victory Motions, updated movesets with over 180 new moves, 298+ unique attires, 61 Titantrons, and 125 themes. Additionally, Royal Rumble finishers with cheats are available for all 82 superstars. Game adjustments include refined damage values for several finishers, the introduction of new finisher logos, and updated/restructured stables to enhance the gameplay experience.",
            patchnotes: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
            isDiscounted: true,
            Discount: 40,
            Price: {
                id: "usd",
                name: "USD",
                price: 25,
            },
            thumbnail: '/img/poster/limited.png',
            showcaseImgs: [
                "/img/limtedimg/2.jpg",
                "/img/limtedimg/1.jpg",
                "/img/limtedimg/3.jpg",
                "/img/limtedimg/4.png",
                "/img/limtedimg/5.jpg",
                "/img/limtedimg/6.jpg",
                "/img/limtedimg/7.png",
                "/img/limtedimg/8.jpg",
                "/img/limtedimg/9.png",
                "/img/limtedimg/10.jpg",
            ]
            ,
            homeShowcase: true,
            rosterListPath: LimitedListText,
            purchaseLink: "https://lgicheckout.vercel.app/checkout/limited",
            features: LimitedFeatures,
            arena: LimitedArena,
            cons: LimitedCons
        },
        {
            id: "deluxe",
            name: "Deluxe Edition",
            description: `In Version 10.5, new content has been added, including updated Titantrons and loading screens. Graphical bugs have been fixed, and character models have been enhanced with improved shine. Gameplay adjustments include over 290 attires, updated damage values for finishers and other moves, and changes to stables. UI enhancements bring a new menu style and finisher logo integration. Performance fixes have resolved screen freezing issues while preserving save data. To ensure proper functionality, users are advised to use the memory card included with the download. For PC users, the latest PCSX2 nightly build is recommended for the best experience. Some wrestler movesets may require manual configuration. Unauthorized sharing or distribution of this mod is strictly prohibited. Support the creators by downloading only through official channels.`,
            patchnotes: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
            isDiscounted: false,
            Discount: 40,
            Price: {
                id: "usd",
                name: "USD",
                price: 0,
            },
            thumbnail: "/img/poster/deluxe.png",
            showcaseImgs: [
                "/img/deluxeimg/1.png",
                "/img/deluxeimg/2.jpg",
                "/img/deluxeimg/3.jpg",
                "/img/deluxeimg/4.jpg",
                "/img/deluxeimg/5.png",
                "/img/deluxeimg/6.png",
                "/img/deluxeimg/7.png",
                "/img/deluxeimg/8.png",
                "/img/deluxeimg/9.png",
                "/img/deluxeimg/10.png",
            ],
            homeShowcase: true,
            rosterListPath: DeluxeListText,
            purchaseLink: "https://discord.com/channels/836227245881557062/1289225006177325238",
            features: [],
            arena: [],
            cons: []
        },
        {
            id: "dynasty",
            name: "Dynasty Edition",
            description: `In Version 10.5, new content has been added, including updated Titantrons and loading screens. Graphical bugs have been fixed, and character models have been enhanced with improved shine. Gameplay adjustments include over 290 attires, updated damage values for finishers and other moves, and changes to stables. UI enhancements bring a new menu style and finisher logo integration. Performance fixes have resolved screen freezing issues while preserving save data. To ensure proper functionality, users are advised to use the memory card included with the download. For PC users, the latest PCSX2 nightly build is recommended for the best experience. Some wrestler movesets may require manual configuration. Unauthorized sharing or distribution of this mod is strictly prohibited. Support the creators by downloading only through official channels.`,
            patchnotes: "Piracy Warning: Unauthorized distribution and sharing of this mod is strictly prohibited. Piracy not only undermines the hard work and effort that went into creating this content but also violates copyright laws. Respect the developers—only purchase this mod through official channels. Thank you for supporting fair practices!",
            Price: {
                id: "usd",
                name: "USD",
                price: 0,
            },
            thumbnail: "/img/poster/deluxe.png",
            showcaseImgs: [
                "/img/dynastyimg/1.png",
                "/img/dynastyimg/2.png",
                "/img/dynastyimg/3.png",
                "/img/dynastyimg/4.png",
                "/img/dynastyimg/6.png",
                "/img/dynastyimg/5.png",
            ],
            homeShowcase: true,
            rosterListPath: DeluxeListText,
            purchaseLink: "https://discord.com/channels/836227245881557062/1289225006177325238",
            features: DynastyFeatures,
            arena: DynastyArena,
            cons: DynastyCons
        }
    ],


    DownloadPageData: [
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
    ],
    BrowseModsList: [
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
    ],

    Patches: [
        {
            id: "limited",
            title: "Limited Edition Pack",
            tags: ["paid", "Limited Edition"],
            imagesURL: [],
            thumbnail: "/img/poster/limited.png",
            downloadLink: "https://lgicheckout.vercel.app/checkout/limited",
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
            thumbnail: "/img/poster/deluxe.png",
            downloadLink: "https://socialwolvez.com/app/l/uiwfZA",
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
    ],

    TagsList: [
        "free",
        "paid",
        "2K25",
    ],

    PatchesTags: [
        "free",
        "paid",
        "Limited Edition",
        "Deluxe Edition"
    ],

    Navbar: [
        {
            label: "Home",
            slug: "/"
        },
        {
            label: "Showcase",
            slug: "/showcase"
        },
        // {
        //     label: "Mods",
        //     slug: "/mods"
        // },
        {
            label: "Patches",
            slug: "/patches"
        },
        {
            label: "Community",
            slug: "/community"
        },
    ],

  


};
export default Config;