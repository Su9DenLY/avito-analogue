import React from "react";
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Button} from "antd";
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";
import {AdItem} from "@/types/adTypes";

interface HeaderProps {
    setCurrentAd: Dispatch<SetStateAction<AdItem | null>>;
}

const Header: FC<HeaderProps> = ({setCurrentAd}) => {
    const [hovered, setHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const buttonSize = windowWidth <= 600 ? "small" : "large"

    return (
        <header className="bg-gray-900 text-white sm:p-4 p-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={"/list"}>
                    <h1 className="text-4xl font-bold italic">Pesto</h1>
                </Link>
                <div className="flex gap-3.5 items-center">
                    {windowWidth <= 600 ? <PersonIcon/> : (
                        <span style={{color: hovered ? "#ff6163" : "white", cursor: "pointer"}}
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}>
                            Вход и регистрация (скоро)
                        </span>
                    )}
                    <Link to={"/form"}>
                        <Button variant={"solid"}
                                color={"blue"}
                                size={buttonSize}
                                onClick={() => setCurrentAd(null)}>
                            Разместить объявление
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
