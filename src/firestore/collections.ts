import {collection} from "firebase/firestore";
import {db} from "../firebase-config";
import {IDetailedMartialArt} from "../Models/martial-arts/IDetailedMartialArt";
import {CollectionReference} from "@firebase/firestore";
import {IMartialArtCard} from "../Models/MartialArtCard";
import {ISportsClub} from "../Models/SportsClub";
import {ILikedMartialArts} from "../Models/ILikedMartialArts";

export function createCollection<T>(collectionName: string) {
    return collection(db, collectionName) as CollectionReference<T>
}

export const MartialArtsCardsCollection = createCollection<IMartialArtCard>("martial-arts-cards");

export const MartialArtsDetailedCollection = createCollection<IDetailedMartialArt>("martial-arts-detailed");

export const SportsClubsCollection = createCollection<ISportsClub>("sports-club");

export const LikedMartialArtsCollection = createCollection<ILikedMartialArts>("liked-martial-arts")
