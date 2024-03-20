import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";
import useDetailedMartialArt from "../../firestore/useDetailedMartialArts";
import {IDetailedMartialArt} from "../../Models/martial-arts/IDetailedMartialArt";
import MartialArtMainImage from "../../components/DetailedMartialArt/mainImage/MainImage";
import TextSection from "../../components/DetailedMartialArt/textSection/TextSection";
import OrganisationCards from "../../components/DetailedMartialArt/organisations/OrganisationCards";

export default function DetailedMartialArt() {

    const { martialArtName } = useParams<string>();

    const {get: getDetailedMartialArt } = useDetailedMartialArt();

    const [currentDetailedMartialArt, setCurrentDetailedMartialArt] = useState<IDetailedMartialArt>()


    useEffect(() => {
        getDetailedMartialArt(martialArtName!).then((data) => setCurrentDetailedMartialArt(data))
    }, []);


    return (
        <GlobalLayout>
            <div>
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
