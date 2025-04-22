export interface NavItem {
    slug: string
    label: string
}
export interface DownloadData {
    title: string;
    description?: string;
    downloadLink: string;
    key?: string;
}

export interface Video {
    title: string;
    link: string;
    thumbnail: string
}
interface CurrencyOptions {
    id: string,
    name: string,
    price: number
}
export type ModPack = {
    id: string,
    name: string;
    description?: string;
    Price: CurrencyOptions;
    thumbnail: string;
    showcaseImgs: string[],
    homeShowcase: boolean,
    rosterListPath?: string,
    purchaseLink: string,
    features: string[],
    arena: string[],
    cons: string[],
    credits: string[]
}
export interface SortingModPack {
    id: string;
    title: string;
    thumbnail?: string;
    tags: string[];
    imagesURL: string[];
    downloadLink: string;
}