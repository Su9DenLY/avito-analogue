import React from "react";
import {Segmented} from "antd";
import {Dispatch, FC, SetStateAction} from "react";

interface CategoryChooseProps {
    categories: string[];
    setCurrentCategory: Dispatch<SetStateAction<string>>
}

const CategoryChoose: FC<CategoryChooseProps> = ({categories, setCurrentCategory}) => {
    return (
        <nav>
            <Segmented<string>
                options={categories}
                size={"large"}
                onChange={(value: string) => {
                    setCurrentCategory(value)
                }}
            />
        </nav>
    )
}

export default CategoryChoose;
