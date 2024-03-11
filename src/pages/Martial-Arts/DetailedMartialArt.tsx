import React from 'react';
import { useParams } from "react-router-dom";
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";

export default function DetailedMartialArt() {

    const { martialArtName } = useParams();


    return (
        <GlobalLayout>
            <h1>{martialArtName}</h1>
        </GlobalLayout>
    )
}
