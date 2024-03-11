import React from 'react';
import Martial_Arts from '../../components/martial-arts-cards/Martial-Arts';
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";
import {useSearchParams} from "react-router-dom";

export default function Martial() {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <GlobalLayout>
            <Martial_Arts/>
        </GlobalLayout>
    )
}
