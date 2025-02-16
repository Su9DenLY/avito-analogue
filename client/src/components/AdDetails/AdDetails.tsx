import React from "react";
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "antd";
import {AdItem} from "@/types/adTypes";
import {getAdById} from "@/api/items";
import AdInfo from "@/components/AdDetails/AdInfo";
import ItemImage from "@/components/AdDetails/ItemImage";
import BorderColorIcon from '@mui/icons-material/BorderColor';

interface AdDetailsProps {
    setCurrentAd: Dispatch<SetStateAction<AdItem | null>>;
}

const AdDetails: FC<AdDetailsProps> = ({setCurrentAd}) => {
    const {id} = useParams<{ id: string }>();
    const [ad, setAd] = useState<AdItem>({} as AdItem)

    useEffect(() => {
        if (!id) return;

        const getAd = async () => {
            try {
                const data = await getAdById(parseInt(id));
                setAd(data);
            } catch (error) {
                console.error("Ошибка при загрузке объявления:", error);
            }
        };

        void getAd();
    }, [id]);

    if (Object.keys(ad).length === 0) {
        return <div className="text-center text-xl font-bold mt-10">Объявление не найдено</div>;
    }


    return (
        <div className="mx-auto mt-10 p-5">
            <div className="flex md:flex-row-reverse justify-around flex-col gap-10 w-full">
                <ItemImage ad={ad}/>
                <div>
                    <div className="flex w-full items-center gap-3.5">
                        <h1 className="text-2xl sm:text-3xl font-bold">{ad.name}</h1>
                        <Link to={"/form"}>
                            <Button type={"text"} className="w-fit p-10"
                                    icon={<BorderColorIcon style={{color: "gray"}}/>}
                                    size={"small"}
                                    onClick={() => setCurrentAd(ad)}>
                            </Button>
                        </Link>
                    </div>
                    <AdInfo ad={ad}/>
                </div>
            </div>
        </div>
    );
};

export default AdDetails;
