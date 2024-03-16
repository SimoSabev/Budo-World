import { ISportsClub } from "../SportsClub";

export interface IDetailedMartialArt {
    route: string;
    heading: string;
    headImageSrc: string;
    history: string;
    organisations: ISportsClub[];
}

export interface IDetailedMartialArtMap {
    name: string;
    data: IDetailedMartialArt;
}