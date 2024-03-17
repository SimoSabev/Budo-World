import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";
import useDetailedMartialArt from "../../firestore/useDetailedMartialArts";
import {IDetailedMartialArt} from "../../Models/martial-arts/IDetailedMartialArt";

export default function DetailedMartialArt() {

    const { martialArtName } = useParams<string>();

    const {get: getDetailedMartialArt } = useDetailedMartialArt();

    const [currentDetailedMartialArt, setCurrentDetailedMartialArt] = useState<IDetailedMartialArt>()


    useEffect(() => {
        getDetailedMartialArt(martialArtName!).then((data) => setCurrentDetailedMartialArt(data))
    }, []);


    return (
        <GlobalLayout>
            <h1>{martialArtName}</h1>
        </GlobalLayout>
    )
}
