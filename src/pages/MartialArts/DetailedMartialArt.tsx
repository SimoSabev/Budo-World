import React, {useEffect, useState} from 'react';
import styles from './DetailedMartialArt.module.css'
import { useParams } from "react-router-dom";
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";
import useDetailedMartialArt from "../../firestore/useDetailedMartialArts";
import {IDetailedMartialArt} from "../../Models/martial-arts/IDetailedMartialArt";
import MartialArtMainImage from "../../components/DetailedMartialArt/mainImage/MainImage";
import TextSection from "../../components/DetailedMartialArt/textSection/TextSection";
import OrganisationCards from "../../components/DetailedMartialArt/organisations/OrganisationCards";
import Like from "../../components/SVGs/Likes/Like";
import {auth} from "../../firebase-config";
import {ILikedMartialArts} from "../../Models/ILikedMartialArts";
import {onAuthStateChanged} from "firebase/auth";

export default function DetailedMartialArt() {

    const { martialArtName } = useParams<string>();

    const {get: getDetailedMartialArt } = useDetailedMartialArt();

    const [currentDetailedMartialArt, setCurrentDetailedMartialArt] = useState<IDetailedMartialArt>()

    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        getDetailedMartialArt(martialArtName!).then((data) => setCurrentDetailedMartialArt(data))
        return () => onAuthStateChanged(auth, setUser)();
    }, []);


    return (
        <GlobalLayout>
            <div className={styles.container}>
                {user && user.uid && <Like route={martialArtName as string}/>}

                <MartialArtMainImage
                    imageSrc={currentDetailedMartialArt?.headImageSrc as string}
                />
                <TextSection
                    heading={currentDetailedMartialArt?.heading as string}
                    text={currentDetailedMartialArt?.history as string}
                />
                
                <OrganisationCards
                    route={currentDetailedMartialArt?.route as string}
                />
            </div>
        </GlobalLayout>
    )
}
