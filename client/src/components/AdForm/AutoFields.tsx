import React from "react";
import {FC} from "react";
import {Control, Controller, FieldErrors} from "react-hook-form";
import {Form, Input, InputNumber} from "antd";
import {AdFormData} from "@/types/adTypes";

interface AutoFieldsProps {
    control: Control<AdFormData>;
    errors: FieldErrors<AdFormData>;
}

const AutoFields: FC<AutoFieldsProps> = ({control, errors}) => {
    return (
        <>
            <Form.Item label="Марка" validateStatus={errors.brand ? "error" : ""} help={errors.brand?.message}>
                <Controller
                    name="brand"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item label="Модель" validateStatus={errors.model ? "error" : ""} help={errors.model?.message}>
                <Controller
                    name="model"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item label="Год выпуска" validateStatus={errors.year ? "error" : ""} help={errors.year?.message}>
                <Controller
                    name="year"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>

            <Form.Item label="Пробег (км)">
                <Controller
                    name="mileage"
                    control={control}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>
        </>
    );
};

export default AutoFields;
