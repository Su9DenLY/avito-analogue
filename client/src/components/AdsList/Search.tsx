import React from "react";
import {Dispatch, FC, SetStateAction} from "react";

interface SearchProps {
    currentSearchText: string;
    setCurrentSearchText: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({currentSearchText, setCurrentSearchText}) => {
    return (
        <div className="w-full lg:w-1/3 pt-5 px-5">
            <input
                type="text"
                value={currentSearchText}
                onChange={(e) => setCurrentSearchText(e.target.value)}
                placeholder="Поиск по названию"
                className="w-full p-2 border border-gray-300 rounded-4xl px-5 py-2"
            />
        </div>
    );
};

export default Search;
