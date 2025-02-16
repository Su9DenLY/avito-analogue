import React from "react";
import {FC, useEffect} from "react";
import {useForm, useWatch} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Button, Form} from "antd";
import {createAd, updateAd} from "@/api/items";
import {AdItem, AdFormData} from "@/types/adTypes";
import CommonFields from "./CommonFields";
import RealEstateFields from "@/components/AdForm/RealEstateFields";
import AutoFields from "@/components/AdForm/AutoFields";
import ServiceFields from "@/components/AdForm/ServiceFields";

interface AdFormProps {
    initialData?: AdItem | null;
}

const categoryOptions = ["Недвижимость", "Авто", "Услуги"] as const;


const AdForm: FC<AdFormProps> = ({initialData}) => {
    const navigate = useNavigate();
    const {control, handleSubmit, reset, setValue, formState: {errors}} = useForm<AdFormData>({
        defaultValues: initialData ? {...initialData} : {
            name: "",
            description: "",
            location: "",
            photos: [],
            type: undefined,
        },
    });

    const selectedCategory = useWatch({control, name: "type"});

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        } else {
            reset((prev) => ({
                ...prev,
                type: selectedCategory,
            }));
        }
    }, [selectedCategory, reset, initialData]);

    const onSubmit = async (data: AdFormData) => {
        try {
            if (initialData) {
                await updateAd(initialData.id, data);
            } else {
                await createAd(data);
            }
            navigate("/list");
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto my-10 p-5 border rounded">
            <h2 className="text-2xl font-bold text-center mb-4">
                {initialData ? "Редактировать объявление" : "Создать объявление"}
            </h2>
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                <CommonFields control={control} errors={errors} setValue={setValue} categoryOptions={categoryOptions}/>

                {selectedCategory === "Недвижимость" && <RealEstateFields control={control} errors={errors}/>}
                {selectedCategory === "Авто" && <AutoFields control={control} errors={errors}/>}
                {selectedCategory === "Услуги" && <ServiceFields control={control} errors={errors}/>}

                <Button type="primary" htmlType="submit" className="w-full mt-3">
                    {initialData ? "Сохранить изменения" : "Создать объявление"}
                </Button>
            </Form>
        </div>
    );
};

export default AdForm;
