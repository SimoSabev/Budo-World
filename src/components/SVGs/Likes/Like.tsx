import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import useLikedSports from "../../../firestore/useLikedSports";
import {useEffect, useState} from "react";


export default function Like({route}: { route: string }) {

    const {addLike, likedMartialArts } = useLikedSports();

    const [liked, setLiked] = useState(false);

    useEffect(() => setLiked(likedMartialArts.liked.includes(route)), [likedMartialArts]);

    const handleLike = () => addLike(route)

    return (
        <div>
            <Checkbox
                checked={liked}
                style={{color: "antiquewhite"}}
                onClick={handleLike}
                icon={<FavoriteBorder/>}
                checkedIcon={<Favorite/>}
            />
        </div>
    );
}