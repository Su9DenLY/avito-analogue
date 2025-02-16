import React from "react";
import {FC} from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";

const NotFound:FC = () => {
    return (
        <div className="flex flex-col items-center w-full mt-10 gap-y-10">
            <h1 className="font-bold text-4xl text-center">Страница не найдена</h1>
            <Link to={"/list"}>
                <Button type={"primary"}>На главную</Button>
            </Link>
        </div>
    )
}

export default NotFound;
