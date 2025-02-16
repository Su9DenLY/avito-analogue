import React from "react";
import {AdItem} from "@/types/adTypes";
import {FC} from "react";

interface AdImageProps {
    ad: AdItem
}

const ItemImage: FC<AdImageProps> = ({ad}) => {
    return (
        <div className="flex justify-center">
            <img alt={ad.name}
                 src={ad?.photos?.[0] ?? "https://breedbase.ru/rodoslovnye/husky/images/no-photo.png"}
                 className="w-xl h-xl lg:w-2xl lg:h-2xl object-cover"
            />
        </div>
    )
}

export default ItemImage;
