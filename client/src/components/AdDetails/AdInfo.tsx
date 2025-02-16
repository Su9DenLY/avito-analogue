import React from "react";
import {AdItem} from "@/types/adTypes";
import {FC} from "react";

interface AdInfoProps {
    ad: AdItem
}

const AdInfo: FC<AdInfoProps> = ({ad}) => {
    return (
        <div className="text-2xl">
            <p className="text-gray-600">{ad.description}</p>
            <p className="mt-2"><strong>Местоположение:</strong> {ad.location}</p>
            <p><strong>Тип:</strong> {ad.type}</p>

            {ad.type === "Недвижимость" && (
                <>
                    <p><strong>Тип недвижимости:</strong> {ad.propertyType}</p>
                    <p><strong>Площадь:</strong> {ad.area} м²</p>
                    <p><strong>Комнат:</strong> {ad.rooms}</p>
                    <p><strong>Цена:</strong> {ad.price} ₽</p>
                </>
            )}

            {ad.type === "Авто" && (
                <>
                    <p><strong>Марка:</strong> {ad.brand}</p>
                    <p><strong>Модель:</strong> {ad.model}</p>
                    <p><strong>Год выпуска:</strong> {ad.year}</p>
                    <p><strong>Пробег:</strong> {ad.mileage} км</p>
                </>
            )}

            {ad.type === "Услуги" && (
                <>
                    <p><strong>Тип услуги:</strong> {ad.serviceType}</p>
                    <p><strong>Опыт:</strong> {ad.experience} лет</p>
                    <p><strong>Стоимость:</strong> {ad.cost} ₽</p>
                    <p><strong>График работы:</strong> {ad.schedule}</p>
                </>
            )}

        </div>
    )
}

export default AdInfo;
