import React from "react";
import {FC} from "react";
import {Control, Controller, FieldErrors} from "react-hook-form";
import {Form, Input, InputNumber} from "antd";
import {AdFormData} from "@/types/adTypes";

interface RealEstateFieldsProps {
    control: Control<AdFormData>;
    errors: FieldErrors<AdFormData>;
}

const RealEstateFields: FC<RealEstateFieldsProps> = ({control, errors}) => {
    return (
        <>
            <Form.Item label="Тип недвижимости" validateStatus={errors.propertyType ? "error" : ""}
                       help={errors.propertyType?.message}>
                <Controller
                    name="propertyType"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item label="Площадь (кв. м)" validateStatus={errors.area ? "error" : ""} help={errors.area?.message}>
                <Controller
                    name="area"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>

            <Form.Item label="Количество комнат" validateStatus={errors.rooms ? "error" : ""}
                       help={errors.rooms?.message}>
                <Controller
                    name="rooms"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>

            <Form.Item label="Цена" validateStatus={errors.price ? "error" : ""} help={errors.price?.message}>
                <Controller
                    name="price"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>
        </>
    );
};

export default RealEstateFields;
