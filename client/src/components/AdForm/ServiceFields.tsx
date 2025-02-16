import React from "react";
import {FC} from "react";
import {Control, Controller, FieldErrors} from "react-hook-form";
import {Form, Input, InputNumber} from "antd";
import {AdFormData} from "@/types/adTypes";

interface ServiceFieldsProps {
    control: Control<AdFormData>;
    errors: FieldErrors<AdFormData>;
}

const ServiceFields: FC<ServiceFieldsProps> = ({control, errors}) => {
    return (
        <>
            <Form.Item label="Тип услуги" validateStatus={errors.serviceType ? "error" : ""}
                       help={errors.serviceType?.message}>
                <Controller
                    name="serviceType"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item label="Опыт работы (лет)" validateStatus={errors.experience ? "error" : ""}
                       help={errors.experience?.message}>
                <Controller
                    name="experience"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>

            <Form.Item label="Стоимость" validateStatus={errors.cost ? "error" : ""} help={errors.cost?.message}>
                <Controller
                    name="cost"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => (
                        <InputNumber {...field} controls={false} style={{width: "100%"}}/>
                    )}
                />
            </Form.Item>

            <Form.Item label="График работы" validateStatus={errors.schedule ? "error" : ""}
                       help={errors.schedule?.message}>
                <Controller
                    name="schedule"
                    control={control}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>
        </>
    );
};

export default ServiceFields;
