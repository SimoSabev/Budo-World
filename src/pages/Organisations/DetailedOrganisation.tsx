import {useParams} from "react-router-dom";
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";

export default function DetailedOrganisation() {

    const { organisationName } = useParams();


    return (
        <GlobalLayout>
            <h1>{organisationName}</h1>
        </GlobalLayout>
    )
}