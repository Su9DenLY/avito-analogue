import React from "react";
import {FC, useState} from "react";
import CategoryChoose from "@/components/AdsList/CategoryChoose";
import AdsGrid from "@/components/AdsList/AdsGrid";
import Search from "@/components/AdsList/Search";

const AdsList: FC = () => {
    const categories: string[] = ["Все", "Авто", "Недвижимость", "Услуги"];
    const [currentCategory, setCurrentCategory] = useState("Все")
    const [currentSearchText, setCurrentSearchText] = useState("")

    return (
        <main className="flex flex-col flex-wrap justify-between items-start gap-5">
            <Search currentSearchText={currentSearchText} setCurrentSearchText={setCurrentSearchText}/>
            <div
                className="flex flex-col flex-wrap lg:flex-row justify-between items-start lg:px-8 md:px-4 px-2 gap-5 w-full">
                <h1 className="text-5xl font-bold">Объявления</h1>
                <CategoryChoose categories={categories} setCurrentCategory={setCurrentCategory}/>
            </div>
            <AdsGrid currentCategory={currentCategory} currentSearchText={currentSearchText}/>
        </main>
    )
}

export default AdsList;
