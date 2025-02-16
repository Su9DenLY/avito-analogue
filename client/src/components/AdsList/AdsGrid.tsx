import React from "react";
import {FC, useEffect, useState} from "react";
import {AdItem} from "@/types/adTypes";
import {getAllAds} from "@/api/items";
import {Card, Pagination, PaginationProps} from "antd";
import {Link} from "react-router-dom";

const {Meta} = Card;

interface AdsGridProps {
    currentCategory: string;
    currentSearchText: string;
}

const AdsGrid: FC<AdsGridProps> = ({currentCategory, currentSearchText}) => {
    const [ads, setAds] = useState<AdItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const adsPerPage = 5;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        const getAds = async () => {
            try {
                const data = await getAllAds();
                setAds(data);
            } catch (error) {
                console.error("Ошибка при загрузке объявлений:", error);
            }
        };

        void getAds();
    }, []);

    const filteredAds: AdItem[] = ads
        .filter((ad) => (currentCategory !== "Все" ? ad.type === currentCategory : true))
        .filter((ad) => ad.name.toLowerCase().includes(currentSearchText.toLowerCase()));

    const startIndex: number = (currentPage - 1) * adsPerPage;
    const paginatedAds: AdItem[] = filteredAds.slice(startIndex, startIndex + adsPerPage);

    const cardWidth: string = windowWidth <= 500 ? "250px" : "300px";

    const paginationChangeHandle: PaginationProps["onChange"] = (page) => {
        setCurrentPage(page);
        document.getElementById("root")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-10 justify-around pl-5 pr-5 w-full">
                {paginatedAds.map(ad => (
                    <Card key={ad.id}
                          hoverable={true}
                          cover={
                              <img
                                  alt={ad.name}
                                  src={ad?.photos?.[0] ?? "https://breedbase.ru/rodoslovnye/husky/images/no-photo.png"}
                                  className="w-full h-[200px] object-cover"
                              />
                          }
                          actions={[
                              <Link to={`/item/${ad.id}`} key="open">Открыть</Link>
                          ]}
                          style={{width: cardWidth}}
                    >
                        <Meta title={ad.name} description={`${ad.location} - ${ad.type}`}/>
                    </Card>
                ))}
            </div>

            <Pagination current={currentPage}
                        pageSize={adsPerPage}
                        total={filteredAds.length}
                        onChange={paginationChangeHandle}
                        style={{marginTop: "3rem", marginBottom: "4rem", textAlign: "center", justifySelf: "center"}}
            />
        </div>
    );
}

export default AdsGrid;
